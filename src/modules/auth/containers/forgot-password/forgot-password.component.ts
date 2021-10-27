import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from 'jquery';
import swal from 'sweetalert';
@Component({
    selector: 'sb-forgot-password',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    security_question:any = '';
    email:any = '';
    step:any ='1';
    constructor(private router: Router, private service: AuthService, private loader: NgxSpinnerService) {}
    ngOnInit() {}

    forget_password_1(){
        const data = {email:this.email}
        this.service.f_1(data).subscribe((res)=>{
            if(res.result){
                this.step = '2'
                this.security_question = res.data
            }else{
                swal('Error', "No email exists", 'error');
            }
        }),((err:any)=>{
            swal('Error', "Something went wrong", 'error');

        })
    }

    forget_password_2(){
        const data = {email:this.email}
        this.service.f_2(data).subscribe((res)=>{
            if(res.result){
                this.step = '2'
                this.security_question =res.data

            }else{
                swal('Error', "No email exists", 'error');
            }
        })
    }

    forget_password_3(){
        const data = {email:this.email}
        this.service.f_1(data).subscribe((res)=>{
            if(res.result){
                this.step = '2'
                this.security_question =res.data

            }else{
                swal('Error', "No email exists", 'error');
            }
        })
    }
}
