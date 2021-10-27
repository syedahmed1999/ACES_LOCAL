import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-result-exam',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './result-exam.component.html',
    styleUrls: ['result-exam.component.scss'],
})
export class ResultExamComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
