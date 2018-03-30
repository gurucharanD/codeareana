import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { RegisterService } from '../register.service';
import {
  FormGroup,
  FormControl,
  Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-fac-register',
  templateUrl: './fac-register.component.html',
  styleUrls: ['./fac-register.component.css']
})
export class FacRegisterComponent implements OnInit {

  form: FormGroup;
  public username = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);
  public year = new FormControl('', Validators.required);
  public section = new FormControl('', Validators.required);


  isRegistered: boolean;


  constructor(private _registerService: RegisterService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      'username': this.username,
      'password': this.password,
      'year': this.year,
      'section': this.section
    });

  }

  facultyRegister() {
    if (this.username.value === '' || this.password.value === '') {
      alert('Username/Password cannot be empty');
    } else {

      const user = {
        username: this.username.value,
        password: this.password.value,
        };


      this._registerService.registerFaculty(user)
        .subscribe(res => {

          alert(res.msg);
          this.router.navigate(['facultyLogin']);
        });

    }


  }
}
