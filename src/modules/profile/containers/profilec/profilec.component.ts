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
    constructor(private loader:NgxSpinnerService, private service:ProfileService, private router:Router) {
        this.get_profile_details()
    }
    ngOnInit() {}

    get_profile_details(){
        const data = {email:localStorage.getItem("email")}
        this.loader.show();
        this.service.dashboard(data).subscribe((response) => {
            
            if(response.result){
                // localStorage.setItem('id', response.data.id)
                // localStorage.setItem('email', response.data.email)
                // localStorage.setItem('name', response.data.name)
                // localStorage.setItem('user_type', response.data.role.name)
                // localStorage.setItem('email', response.data.email)
                // var sub = JSON.stringify(response.subjects)
                // localStorage.setItem('subject',sub)

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
