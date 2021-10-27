import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-details-exam',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './details-exam.component.html',
    styleUrls: ['details-exam.component.scss'],
})
export class DetailsExamComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
