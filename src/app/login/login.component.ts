import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../common/forms.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {

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
