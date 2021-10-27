import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient) {}

    getDashboard$(): Observable<{}> {
        return of({});
    }

    
  dashboard(data: any): Observable<any> {
    const path = environment.key + "dashboard";
    return this.http.post(path, data).pipe(
      map(results => results)
    );
  }
}
