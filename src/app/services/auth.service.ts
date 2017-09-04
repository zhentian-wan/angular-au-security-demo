import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: ''
};

@Injectable()
export class AuthService {

  subject = new BehaviorSubject<User>(undefined);
  // filter out undefined user
  user$: Observable<User> = this.subject.asObservable().filter(user => !!user);
  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);


  constructor(private http: HttpClient) {
    this.http.get<User>('/api/user')
      // when there is valid session id, emit the user$
      .subscribe((user) => this.subject.next(user ? user : ANONYMOUS_USER));
  }

  signUp(email: string, password: string) {
    return this.http.post<User>('/api/signup', {
      email,
      password
    }).shareReplay()
      .do((user) => this.subject.next(user));
  }

}
