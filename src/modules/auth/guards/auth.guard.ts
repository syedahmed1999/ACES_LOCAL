import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router: Router) {}
    canActivate(): boolean {
      if (localStorage.getItem("email")) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
}
