import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-view-teachertest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './view-teachertest.component.html',
    styleUrls: ['view-teachertest.component.scss'],
})
export class ViewTeachertestComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
