import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';
import {ProfileService} from '../../services/profile.service';

@Component({
    selector: 'sb-profilec',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profilec.component.html',
    styleUrls: ['profilec.component.scss'],
})
export class ProfilecComponent implements OnInit {
    name:any = '';
    image_url:any = '';
    roll_no:any = '';
    security_answer:any = '';
    security_question:any = '';
    role:any;
    subjects:any = [];

    incomingExam:any;
    email:any = '';
    // name:any = '';
    // name:any = '';
    // name:any = '';
    // name:any = '';
    // name:any = '';

    constructor(private loader:NgxSpinnerService, private service:ProfileService, private router:Router) {
        this.get_profile_details()
    }
    ngOnInit() {}

    get_profile_details(){
        const data = {email:localStorage.getItem("email")}
        this.loader.show();
        this.service.dashboard(data).subscribe((response) => {
            
            if(response.result){
                this.name = response.data.name
                this.image_url = response.data.image_url
                this.roll_no = response.data.roll_no
                this.security_answer = response.data.security_answer
                this.security_question = response.data.security_question
                this.incomingExam = response.data.incomingExam
                if (response.data.role_id == 1) {
                    this.role = "Student"
                }else{
                    this.role = "Teacher"
                }
                this.email = localStorage.getItem("email")

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
        // API CALLING
        // this.router.navigate(['dashboard'])
    }
}
