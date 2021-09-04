import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'sb-main-teachertest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './main-teachertest.component.html',
    styleUrls: ['main-teachertest.component.scss'],
})
export class MainTeachertestComponent implements OnInit {
    constructor(private router: Router, private loader:NgxSpinnerService) {}
    ngOnInit() {}

    set_exam(){
        this.router.navigate(['/teacherview/setExam'])
    }
}
