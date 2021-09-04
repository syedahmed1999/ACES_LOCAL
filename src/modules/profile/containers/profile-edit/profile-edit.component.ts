import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-profile-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile-edit.component.html',
    styleUrls: ['profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
