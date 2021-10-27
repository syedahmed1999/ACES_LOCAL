import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';
import {ProfileService} from '../../services/profile.service';
@Component({
    selector: 'sb-profile-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile-edit.component.html',
    styleUrls: ['profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
    name: any;
    image_url: any;
    roll_no: any;
    security_answer: any;
    security_question: any;
    incomingExam: any;
    role: any;
    email: any;
    subjects: any = [];
    profile_img:any = '';
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

    }

    on_select(ev: any) {
        this.loader.show();
        var file = ev.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
            // this.image_bool = true;
            // this.profile_img = e.target.result;
            // console.log(this.profile_img);
            this.verify_img(e.target.result);
        }
    }

    save(){
        this.loader.show();
        const data = {email:localStorage.getItem("email"), profile_img:this.image_url}
        this.service.updateProfileImage(data).subscribe((res)=>{
            if (res.result) {
                this.loader.hide()
                this.router.navigate(['profile/profile'])
            }
            else {
                this.loader.hide()
                swal("Error", "Some Error Detected", "error")
            }
        }), ((error:any) =>{
        })
    }

    verify_img(img: any) {
        var obj = this;
        var arr = [];
        arr = img.split('/')
        arr.splice(0,1)
        arr.splice(0,1)
        console.log(arr);
        var str = arr.join('/')
        // this.sent_image = str;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.luxand.cloud/photo/landmarks",
            "method": "POST",
            "headers": {
                "token": "c545bbc3f79744959bd6fcd6dd467d62"
            },
            "data": {"photo":'/'+   str}
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            obj.loader.hide();

            if(response.status == 'success'){
                // obj.image_bool = true;
                obj.image_url = img;
                swal('Success', 'Face Detected', 'success')
                localStorage.setItem('img', str)

            }else{
                // obj.image_bool = false;
                // obj.profile_img = obj.image_url;
                swal('Error', 'No Face Detected', 'error')
            }

        })
    }
}
