import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestService {
    constructor() {}

    getTest$(): Observable<{}> {
        return of({});
    }

}
