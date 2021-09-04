import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '../models';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {
    email:any = '';
    name_arr:any = [];
    constructor() {
        this.email = localStorage.getItem('email')
        var name = localStorage.getItem('name');
        if(name){
            this.name_arr = name.split(' ')
            console.log(this.name_arr)
        }
        this.user = {
            id: '123',
            firstName: this.name_arr[0],
            lastName: this.name_arr[1],
            email: this.email,
        };
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }
}
