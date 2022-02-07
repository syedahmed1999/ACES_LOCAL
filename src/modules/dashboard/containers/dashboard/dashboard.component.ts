import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";  
import * as $ from 'jquery';
import swal from 'sweetalert';
import {DashboardService} from '../../services/dashboard.service';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    data:any;
    constructor(private loader:NgxSpinnerService, private service:DashboardService, private router:Router) {4
        this.get_dashboard_info()
        if(localStorage.getItem('user_type') == "teacher"){
            this.get_all()
        }
    }
    ngOnInit() {}
    ngAfterViewInit() {

    }

    get_all(){
        const data = {email:localStorage.getItem('email')}
        this.service.get_everything(data).subscribe((res)=>{

        })
    }

    goto_incommingExam(data:any){
        console.log(data)
    }
    get_dashboard_info() {
        const data = {email:localStorage.getItem("email")}
        this.loader.show();
        this.service.dashboard(data).subscribe((response) => {
            
            if(response.result){
                this.data = response.data
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
