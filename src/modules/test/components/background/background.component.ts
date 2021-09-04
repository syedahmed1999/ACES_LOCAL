import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-background',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './background.component.html',
    styleUrls: ['background.component.scss'],
})
export class BackgroundComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
