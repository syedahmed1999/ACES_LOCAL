import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import * as $ from 'jquery'
@Component({
    selector: 'sb-take-exam',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './take-exam.component.html',
    styleUrls: ['take-exam.component.scss'],
})
export class TakeExamComponent implements OnInit {
    image: string = '';
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
        }, 5000)
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
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }
    public get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }
    constructor() { }
}
