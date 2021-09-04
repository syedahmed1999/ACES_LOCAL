import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StudentTestDetailService {
    constructor() {}

    getStudentTestDetail$(): Observable<{}> {
        return of({});
    }

}
