import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs/Observable';
import {User} from './model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.isLoggedIn$ = this.auth.isLoggedIn$;
    this.isLoggedOut$ = this.auth.isLoggedOut$;
  }

  logout() {
    this.auth.logout().subscribe();
  }


  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.auth.login(
        val.email,
        val.password
      ).subscribe(
        () => {
          console.log('User logged in');
          this.router.navigateByUrl('/');
        }
      );
    }
  }
}
