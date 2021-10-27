import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
// import * as $ from 'jquery';
import swal from 'sweetalert';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],

})
export class LoginComponent implements OnInit {
    email: any = '';
    password: any = '';
    login_teacher: any = {
        email: 't@gmail.com',
        password: '123456'
    }
    login_student: any = {
        email: 's@gmail.com',
        password: '123456'
    }
    constructor(private router: Router, private loader: NgxSpinnerService, private service:AuthService) {
        if (localStorage.getItem('password')) {
            this.password = localStorage.getItem('password');
        } else {
            this.password = '';
        }
        if(localStorage.getItem('email')){
            this.email = localStorage.getItem('email');
        }else{
            this.email = '';
        }
    }
    ngOnInit() { }

    validateEmail(email: string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



    login() {

        if (!this.email && !this.password) {
            swal('Error', "Email and Password cannot be empty", 'error');
            return false;
        }
        else if (!this.email) {
            swal('Error', "Email cannot be empty", 'error');
            console.log('hh')
            return false;
        }
        else if (!this.validateEmail(this.email)) {
            swal('Error', "Invalid Email", 'error');
            return false;
        }
        else if (!this.password) {
            swal('Error', "Passord cannot be empty", 'error');
            return false;
        }

        // if ($('#rememberPasswordCheck').prop('checked')) {
        //     localStorage.setItem('password', this.password);
        // }
        console.log(this.email, this.password)
        const data = { email: this.email, password: this.password }
        this.loader.show();
        this.service.login(data).subscribe((response) => {
            
            if(response.result){
                swal('Success', "Login Successfully", 'success');
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('name', response.data.name)
                localStorage.setItem('user_type', response.data.role.name)
                localStorage.setItem('email', response.data.email)
                var sub = JSON.stringify(response.subjects)
                localStorage.setItem('subject',sub)

                this.loader.hide();
                this.router.navigate(['/dashboard']);
            }else{
                this.loader.hide();
                swal('Error', "No User Exits", 'error');
            }
            console.log(response)
        }), (err: any) => {
            console.log(err)
            this.loader.hide();
            swal('Error', "No User Exits", 'error');

        }
        // API CALLING
        // this.router.navigate(['dashboard'])
    }


}
