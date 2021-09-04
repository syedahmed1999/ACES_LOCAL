import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-tablest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tablest.component.html',
    styleUrls: ['tablest.component.scss'],
})
export class TablestComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
