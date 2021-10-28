import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class StudentTestDetailService {
    constructor(private http:HttpClient) {}

    getStudentTestDetail$(): Observable<{}> {
        return of({});
    }

    get_exam(data: any): Observable<any> {
        const path = environment.key + "getExam";
        return this.http.post(path, data).pipe(
          map(results => results)
        );
      }

      submit_exam(data: any): Observable<any> {
        const path = environment.key + "submitExam";
        return this.http.post(path, data).pipe(
          map(results => results)
        );
      }

}
