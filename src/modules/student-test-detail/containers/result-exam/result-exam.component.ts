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
    selector: 'sb-result-exam',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './result-exam.component.html',
    styleUrls: ['result-exam.component.scss'],
})
export class ResultExamComponent implements OnInit {
    constructor(private loader:NgxSpinnerService, private service:StudentTestDetailService, private router:Router) {
        this.get_profile_details()
    }
    incomming_exam:any;
    subjects:any = [];
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
    get_result(){

    }
    ngOnInit() {}
}
