import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';
import {StudentTestDetailService} from '../../services/student-test-detail.service';
@Component({
    selector: 'sb-details-exam',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './details-exam.component.html',
    styleUrls: ['details-exam.component.scss'],
})
export class DetailsExamComponent implements OnInit {
    subjects:any = [];
    constructor(private loader:NgxSpinnerService, private service:StudentTestDetailService, private router:Router) {
        this.get_profile_details()
    }
    ngOnInit() {}
    get_profile_details(){
        const data = {email:localStorage.getItem("email")}
        this.loader.show();
        this.service.dashboard(data).subscribe((response) => {
            if(response.result){
                this.incomming_exam = response.data.incomingExam
                this.subjects = response.data.subjects
                this.loader.hide();
            }else{
                this.loader.hide();
                swal('Error', "Something Went Wrong", 'error');
                this.router.navigate(["/login"])
                localStorage.clear()
            }
            console.log(response)
        }), (err: any) => {
            this.loader.hide();
            swal('Error', "Something Went Wrong", 'error');
            this.router.navigate(["/login"])
            localStorage.clear()
        }
    }
    subject_detail_array:any;
    result:any;
    incomming_exam:any = '';
    get_detail(id:any){
        
        const data = {subject_id:id}
        this.service.get_detail(data).subscribe((res)=>{
            this.result = res.result
            this.subject_detail_array = res
            console.log(this.subject_detail_array)
        })
    }

    go_to_exam(obj:any){
        const data = {subject_id:obj.id}
        this.service.get_detail(data).subscribe((res)=>{
            if(res.start_exam){
                localStorage.setItem('exam_id', obj.exam.id)
                this.router.navigate(['/studentview/takeExam'])
            }else{
                swal("Error", "Time Remaining", "error")
            }
        })

    }
}
