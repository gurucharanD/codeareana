import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LoginService } from '../login-service.service'
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  public username = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);
  public code = new FormControl('', Validators.required);

  isLoggedIn = false;
  year: number;
  showRefresh = false;

  constructor(private router: Router, private loginService: LoginService, private fb: FormBuilder, private auth: AuthenticationService) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      'username': this.username,
      'password': this.password,
      'code': this.code
    });


  }


  checkLogin() {
    // validate the user here

    if (this.username.value === '' || this.password.value === '') {
      alert('Username/Password cannot be empty');
    } else {
      const user = {
        username: this.username.value,
        password: this.password.value,
      };
      this.showRefresh = true;
      this.loginService.isValidUser(user)
        .subscribe(res => {
          // console.log(res);
          if (res.result === 1) {
            this.isLoggedIn = true;
            const userDetails = res.userDetails;
            const obj = {
              year: userDetails.year,
              section: userDetails.section,
              code: this.code.value
            };
            this.loginService.checkCodeValidity(obj).subscribe(result => {
              if (result.length === 0) {
                alert('Invalid Login Code');
              } else {
                this.auth.setStudentLogin(true);
                this.auth.setUserName(userDetails.username);
                this.auth.setUserYear(userDetails.year);
                this.auth.setSection(userDetails.section);
                this.router.navigate(['dashboard']);
              }
            });
          } else {
            this.isLoggedIn = false;
            alert('Invalid USERNAME/PASSWORD/YEAR!');
            this.showRefresh = false;
          }
        });
    }

  }
}
