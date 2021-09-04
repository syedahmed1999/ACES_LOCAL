import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherTestDetailService } from '@modules/teacher-test-detail/services';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
    selector: 'sb-result-teachertest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './result-teachertest.component.html',
    styleUrls: ['result-teachertest.component.scss'],
})
export class ResultTeachertestComponent implements OnInit {
    sem_id: any = 1;
    all_subject: any = [];
    
    constructor(private loader:NgxSpinnerService, private router:Router, private service:TeacherTestDetailService) {
        // this.get_sem_sub();
    }
    ngOnInit() {}
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

    student_exam_details(){
        this.router.navigate(['/teacherview/studentsubjectdetail'])
    }
}
