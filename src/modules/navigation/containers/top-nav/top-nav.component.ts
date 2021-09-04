import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationService } from '@modules/navigation/services';

@Component({
    selector: 'sb-top-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
    email:any ='';
    constructor(private navigationService: NavigationService) {
        this.email=localStorage.getItem('email');
    }
    ngOnInit() {}
    toggleSideNav() {
        this.navigationService.toggleSideNav();
    }
}
