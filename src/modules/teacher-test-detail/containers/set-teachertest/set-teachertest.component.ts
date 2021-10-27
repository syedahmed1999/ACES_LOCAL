import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import moment from 'moment';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert';
import { TeacherTestDetailService } from '../../services/teacher-test-detail.service';
@Component({
    selector: 'sb-set-teachertest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './set-teachertest.component.html',
    styleUrls: ['set-teachertest.component.scss'],
})
export class SetTeachertestComponent implements OnInit {
    exam_date: any = '';
    role: any;
    name: any;
    email: any;
    exam_time: any;
    exam_duration: any = '';
    total_marks: any = '';
    instruction: any = '';
    exam_questions: any = [];
    question: any = '';
    op1: any = '';
    op4: any = '';
    op3: any = '';
    op2: any = '';
    correct:any = '';
    subject_id:any = '';
    constructor(private loader: NgxSpinnerService, private service: TeacherTestDetailService, private router: Router) {
        this.subject_id = localStorage.getItem("subid")
        this.get_profile_details();
    }
    ngOnInit() {

    }

    add_question() {

        let obj = {
            'question': this.question,
            'optionA': this.op1,
            'optionB': this.op2,
            'optionC': this.op3,
            'optionD': this.op4,
            'answer': this.correct
        }
        this.exam_questions.push(obj)
        console.log(this.exam_questions)
        this.question = '';this.op4='';this.op3='';this.op2='';this.op1='';this.correct=''

    }

    get_date(ev: any) {
        this.exam_date = moment(ev.target.value).format('DD-MM-YYYY')
        console.log(this.exam_date)

    }

    get_time(ev: any) {
        this.exam_time = ev.target.value
    }

    get_profile_details() {
        const data = { email: localStorage.getItem("email") }
        this.loader.show();
        this.service.dashboard(data).subscribe((response) => {

            if (response.result) {
                this.name = response.data.name

                if (response.data.role_id == 1) {
                    this.role = "Student"
                } else {
                    this.role = "Teacher"
                }
                this.email = localStorage.getItem("email")
                this.loader.hide();
            } else {
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

    set_exam(){
        const data = {'subject_id': this.subject_id,
        'exam_date': this.exam_date,
        'exam_time': this.exam_time,
        'time_allowed': this.exam_duration,
        'teacher_id': localStorage.getItem('id'),
        'instructions': this.instruction,
        'exam_question': this.exam_questions}
        console.log(data)
        this.loader.show();
        this.service.createExam(data).subscribe((res)=>{
            this.loader.hide()
            if (res.result) {
                this.router.navigate(['teacherview/mainexam'])
            }
        })
    }




}
