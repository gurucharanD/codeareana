import { LoginService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.css']
})
export class CodeGeneratorComponent implements OnInit {

  code: String;
  

  constructor(public loginService: LoginService, public auth: AuthenticationService) { }

  ngOnInit() {
  }

  generateCode() {
    const obj = this.auth.getFacultyDetails();
    // console.log(obj);
    const data = {
      year: obj[0].year,
      section: obj[0].section
    };
    // console.log(data);
    this.loginService.generateRandomLoginCode(data).subscribe(res => {
      this.code = res.code;
    });
  }

}
