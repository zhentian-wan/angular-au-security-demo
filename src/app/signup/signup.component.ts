import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {

    form:FormGroup;

    constructor(private fb: FormBuilder, private auth: AuthService) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required],
            confirm: ['',Validators.required]
        });


    }

    ngOnInit() {

    }


    signUp() {
        const val = this.form.value;

        const {email, password, confirm} = val;

        if (email && password && confirm === password) {
          this.auth.signUp(
            email,
            password
          ).subscribe(
            (user) => console.log("User", user),
            (err) => console.error(err)
          );
        }

    }

}
