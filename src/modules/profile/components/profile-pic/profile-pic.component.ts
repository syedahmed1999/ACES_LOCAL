import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-profile-pic',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile-pic.component.html',
    styleUrls: ['profile-pic.component.scss'],
})
export class ProfilePicComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
