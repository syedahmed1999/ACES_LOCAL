import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';
import {StudentTestDetailService} from '../../services/student-test-detail.service';
@Component({
    selector: 'sb-take-exam',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './take-exam.component.html',
    styleUrls: ['take-exam.component.scss'],
})
export class TakeExamComponent implements OnInit {
    image: string = '';
    warning:any = 3;
    exam_id:any = '';
    exam_detail:any = [];
    submit_arr:any = [];
    public pictureTaken = new EventEmitter<WebcamImage>();
    // toggle webcam on/off
    public showWebcam = true;
    public allowCameraSwitch = true;
    public multipleWebcamsAvailable = false;
    // public deviceId: string;
    public videoOptions: MediaTrackConstraints = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
    };
    public errors: WebcamInitError[] = [];
    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
    public ngOnInit(): void {
        WebcamUtil.getAvailableVideoInputs()
            .then((mediaDevices: MediaDeviceInfo[]) => {
                this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
            });
    }

    ngAfterViewInit(){
        setInterval(() => {
            this.triggerSnapshot()
        }, 500000)
    }
    public triggerSnapshot(): void {
        this.trigger.next();
    }
    public toggleWebcam(): void {
        this.showWebcam = !this.showWebcam;
    }
    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }
    public showNextWebcam(directionOrDeviceId: boolean | string): void {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    public handleImage(webcamImage: WebcamImage): void {
        console.info('received webcam image', webcamImage);
        this.pictureTaken.emit(webcamImage);
        this.image = webcamImage['_imageAsDataUrl'];
        var arr = [];
        arr = this.image.split('/');
        arr.splice(0,1);
        arr.splice(0,1);
        this.image = arr.join('/');
        this.image = '/'+this.image
        console.log(this.image);
        this.face_recognition(this.image);
    }

    get_exam(){

        const data = {exam_id:8}
        this.service.get_exam(data).subscribe((res)=>{
            this.exam_detail = res.data;

        })
    }

    onItemChange(e:any, i:any){
        console.log(e, i)
        let exam = this.exam_detail[i];
        let obj = {
            'id' : exam.id,
            'question' : exam.question,
            'selected_answer' : e,
            'answer' : exam.answer,
        }
        console.log(obj)
        this.submit_arr[i] = obj;
        console.log(this.submit_arr)
    }

    submit_exam(){
        const data = {
            'user_id' : localStorage.getItem("id"),
            'exam_id' : 8,
            'submitted_answer' : this.submit_arr,
            "status": "attempted"
        }
        this.service.submit_exam(data).subscribe((res)=>{
            if(res.result){
                swal("Success", "Exam submitted sucessfully", "success")
                this.router.navigate(['/dashboard'])
            }
            else{
                swal("Error", "Exam not submitted", "error")
                window.location.reload()
            }
        })
    }

    face_recognition(img:any) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.luxand.cloud/photo/search",
            "method": "POST",
            "headers": {
                "token": "c545bbc3f79744959bd6fcd6dd467d62"
            },
            "data": {"photo":img}
        }
        var obj=this;
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            if(response.length != 0){

            }else{
                obj.warning = obj.warning - 1
                swal("Warning", obj.warning+" warning left", "error")
                if(obj.warning == 0){
                    obj.router.navigate(['/dashboard'])
                }
            }
        });
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }
    public get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }
    constructor(private loader:NgxSpinnerService, private service:StudentTestDetailService, private router:Router) {
        this.get_exam()
    }
}
