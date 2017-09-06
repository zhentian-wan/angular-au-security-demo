import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs/Observable';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.isLoggedIn$ = this.auth.isLoggedIn$;
    this.isLoggedOut$ = this.auth.isLoggedOut$;
  }

  logout() {
    this.auth.logout().subscribe();
  }



}
