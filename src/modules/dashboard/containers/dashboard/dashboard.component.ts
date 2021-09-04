import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";  
import * as $ from 'jquery';
import swal from 'sweetalert';
@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private loader:NgxSpinnerService) {}
    ngOnInit() {}
    ngAfterViewInit() {
        this.loader.show();
        setTimeout(() => {
            this.loader.hide();
        }, 1000)
    }
}
