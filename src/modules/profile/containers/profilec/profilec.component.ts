import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-profilec',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profilec.component.html',
    styleUrls: ['profilec.component.scss'],
})
export class ProfilecComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
