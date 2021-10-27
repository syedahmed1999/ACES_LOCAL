import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  getAuth$(): Observable<{}> {
    return of({});
  }
  login(data: any): Observable<any> {
    const path = environment.key + "login";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }

  get_semester_subjects(data: any): Observable<any> {
    const path = environment.key + "semesterSubjects";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }

  check_teacher(data: any): Observable<any> {
    const path = environment.key + "checkTeacher";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }


  registeration(data: any): Observable<any> {
    const path = environment.key + "registeration";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }

  f_1(data: any): Observable<any> {
    const path = environment.key + "verifyemail";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }

  f_2(data: any): Observable<any> {
    const path = environment.key + "verifysecurityanswer";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }

  f_3(data: any): Observable<any> {
    const path = environment.key + "changePassword";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }


  public verify_img(data: any): Observable<any> {
    data = JSON.stringify(data);
    const path = 'https://api.luxand.cloud/photo/verify';

    const httpOptions = {
      headers: new HttpHeaders({
        'token': environment.key_l
      })
    };

    return this.http.post(path, data, httpOptions).pipe(
      map(results => results)
    );
  }
}
