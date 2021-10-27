import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TeacherTestDetailService } from '../../services/teacher-test-detail.service';
import swal from 'sweetalert';

@Component({
    selector: 'sb-main-teachertest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './main-teachertest.component.html',
    styleUrls: ['main-teachertest.component.scss'],
})
export class MainTeachertestComponent implements OnInit {
    subjects:any = [];
    constructor(private router: Router, private loader:NgxSpinnerService, private service:TeacherTestDetailService) {
        this.get_profile_details()
    }
    ngOnInit() {}

    set_exam(id:any){
        localStorage.setItem('subid', id)
        this.router.navigate(['/teacherview/setExam'])
    }
    get_profile_details() {
        const data = { email: localStorage.getItem("email") }
        this.loader.show();
        this.service.dashboard(data).subscribe((response) => {

            if (response.result) {
                this.subjects = response.data.subjects;
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
}
