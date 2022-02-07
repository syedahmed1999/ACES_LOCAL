import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from 'jquery';
import swal from 'sweetalert';
@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    step: any = '1'
    shown_step: any = '1'
    sem_id: string = '';
    user_type: string = '';
    sem_arr: any = [];
    question:any = '';
    answer:any = '';
    total_sem: any = [
        {
            id: '1',
            name: 'Semester 1'
        },
        {
            id: '2',
            name: 'Semester 2'
        },
        {
            id: '3',
            name: 'Semester 3'
        },
        {
            id: '4',
            name: 'Semester 4'
        },
        {
            id: '5',
            name: 'Semester 5'
        },
        {
            id: '6',
            name: 'Semester 6'
        },
        {
            id: '7',
            name: 'Semester 7'
        },
        {
            id: '8',
            name: 'Semester 8'
        },
    ];
    all_subject: any = [];
    profile_img: any = '';
    image_bool: any = false;
    role_id: any;
    f_name: any = '';
    l_name: any = '';
    tel: any = '';
    email: any = '';
    password: any = '';
    c_password: any = '';
    roll_no: any = '';
    t_id: any = '';
    sent_image:any = '';

    constructor(private router: Router, private service: AuthService, private loader: NgxSpinnerService) { }
    ngOnInit() {

    }

    radio_select(type: any) {
        if (type == 'student') {
            this.role_id = 1
        } else {
            this.role_id = 2
        }
    }

    go_back() {
        this.step = '1';
        this.shown_step = '1'
    }
    name(hi: any) {
        console.log('hi', hi)
        this.f_name = hi
    }
    goto_step_two() {
        if (!this.profile_img || !this.f_name || !this.l_name || !this.tel || !this.email || !this.password || !this.c_password || !this.role_id) {
            swal('Error', 'Incomplete Information', 'error');
            return false;
        }
        // name = name.value;
        console.log(this.f_name, this.l_name, this.tel, this.email, this.password, this.c_password)
        this.step = '2';
        this.shown_step = '2'
    }

    select_sem() {
        console.log(this.sem_id)
        var x = this.sem_id;
        this.total_sem.forEach((e: any) => {
            if (this.sem_id == e.id) {
                if (this.sem_arr.includes(e)) {

                } else {
                    this.sem_arr.push(e)
                    this.get_sem_sub();

                }
            }
        })
        console.log(this.sem_arr)
    }

    get_sem_sub() {
        this.loader.show();
        const data = { semester: this.sem_id }
        this.service.get_semester_subjects(data).subscribe((res) => {
            this.loader.hide();
            if (res.result) {
                var x = res.data;
                this.all_subject.push(...res.data)
                // console.log(this.all_subject)
            }
        })
    }
    del_course(i: any) {
        this.all_subject.splice(i, 1)
        this.sem_arr.splice(i, 1)

    }

    del_sem(i: any) {
        this.sem_arr.splice(i, 1)
        this.all_subject.splice(i, 1)
    }

    sign_up() {
        var selected_sub: any[] = [];
        this.all_subject.forEach((e: any) => {
            selected_sub.push(e.id)
        })
        this.loader.show();
        if (this.role_id == 2) {
            const chec = { 'uni_teacher_id': this.t_id }
            this.service.check_teacher(chec).subscribe((res) => {
                if (res.result) {
                    const data = { security_question:this.question, security_answer:this.answer,profile_img: this.profile_img, role_id: this.role_id, name: this.f_name + ' ' + this.l_name, email: this.email, password: this.password, subject_id: selected_sub, uni_teacher_id: this.t_id, roll_no: this.roll_no }
                    this.service.registeration(data).subscribe((result) => {
                        this.loader.hide();
                        if (result.result) {
                            this.router.navigate(['/auth/login'])
                            swal("Success", "User Registered Successfully", "success")
                        } else {
                            swal("Error", result.message, "error")
                        }

                    }), (err: any) => {
                        this.loader.hide();
                        swal("Error", 'Issue Detected', "error")
                    }
                } else {
                    this.loader.hide();
                    swal("Error", 'Invalid Teacher ID', "error")
                    return false;
                }
            })
        } else {
            const data = {security_question:this.question, security_answer:this.answer, profile_img: this.profile_img, role_id: this.role_id, name: this.f_name + ' ' + this.l_name, email: this.email, password: this.password, subject_id: selected_sub, uni_teacher_id: this.t_id, roll_no: this.roll_no }
            this.service.registeration(data).subscribe((result) => {
                this.loader.hide();
                if (result.result) {
                    // this.create_person();
                    this.router.navigate(['/auth/login'])
                    swal("Success", "User Registered Successfully", "success")
                } else {
                    swal("Error", result.message, "error")
                }

            }), (err: any) => {
                this.loader.hide();
                swal("Error", 'Issue Detected', "error")
            }
        }
    }

    on_select(ev: any) {
        this.loader.show();
        var file = ev.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
            this.image_bool = true;
            this.profile_img = e.target.result;
            console.log(this.profile_img);
            this.verify_img(e.target.result);
        }
    }

    create_person(img:any){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.luxand.cloud/subject/v2",
            "method": "POST",
            "headers": {
                "token": "c545bbc3f79744959bd6fcd6dd467d62"
            },
            "data": {"name":this.f_name+' '+this.l_name,"photo":img}
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
    verify_img(img: any) {
        var obj = this;
        var arr = [];
        arr = img.split('/')
        arr.splice(0,1)
        arr.splice(0,1)
        console.log(arr);
        var str = arr.join('/')
        this.sent_image = str;

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
                obj.image_bool = true;
                obj.profile_img = img;
                swal('Success', 'Face Detected', 'success')
                localStorage.setItem('img', str)
                obj.create_person(img)

            }else{
                obj.image_bool = false;
                obj.profile_img = '';
                swal('Error', 'No Face Detected', 'error')
            }

        })
    }
}
