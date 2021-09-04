import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@modules/auth/services';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public userService: UserService, private router: Router, private loader:NgxSpinnerService) {}
    ngOnInit() {}

    logout(){
        this.loader.show();
        setTimeout(() => {
            localStorage.clear()
            this.loader.hide();
            this.router.navigate(['/']) 
        }, 3000)

    }
}
