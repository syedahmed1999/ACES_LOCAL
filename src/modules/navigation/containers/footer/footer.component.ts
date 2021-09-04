import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'sb-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html',
    styleUrls: ['footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
    swall(type:any){
        if(type === 'p'){
            
        }
    }
}
