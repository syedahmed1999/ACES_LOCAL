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
    constructor(private loader:NgxSpinnerService, private service:DashboardService, private router:Router) {
        this.get_dashboard_info()
    }
    ngOnInit() {}
    ngAfterViewInit() {
        this.loader.show();
        setTimeout(() => {
            this.loader.hide();
        }, 1000)
    }
    get_dashboard_info() {
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
