import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable()
export class TeacherTestDetailService {
    constructor(private http:HttpClient) {}

    getTeacherTestDetail$(): Observable<{}> {
        return of({});
    }

    get_semester_subjects(data: any): Observable<any> {
        const path = environment.key + "semesterSubjects";
        return this.http.post(path, data).pipe(
          map(results => results)
        );
      }

      dashboard(data: any): Observable<any> {
        const path = environment.key + "dashboard";
        return this.http.post(path, data).pipe(
          map(results => results)
        );
      }

      createExam(data: any): Observable<any> {
        const path = environment.key + "createExam";
        return this.http.post(path, data).pipe(
          map(results => results)
        );
      }

}
