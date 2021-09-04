import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
    selector: 'sb-sub-teachertest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './sub-teachertest.component.html',
    styleUrls: ['sub-teachertest.component.scss'],
})
export class SubTeachertestComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    exportAsPDF(divId: any) {
        var data = document.getElementById('exam');
        if (data) {
            html2canvas(data).then(canvas => {
                // Few necessary setting options  
                let imgWidth = 208;
                let pageHeight = 295;
                let imgHeight = canvas.height * imgWidth / canvas.width;
                let heightLeft = imgHeight;

                const contentDataURL = canvas.toDataURL('image/png')
                let pdf = new jspdf('p', 'mm', 'a4'); 
                let position = 0;
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
                pdf.save('MYPdf.pdf'); 

            })
        }
    }
}
        
