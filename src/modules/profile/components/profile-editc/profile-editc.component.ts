import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-profile-editc',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile-editc.component.html',
    styleUrls: ['profile-editc.component.scss'],
})
export class ProfileEditcComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
