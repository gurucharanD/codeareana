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
  years = [];
  sections = [];
  facDetails = [];
  selectedYear;
  selectedSection;

  constructor(public loginService: LoginService, public auth: AuthenticationService) { }

  ngOnInit() {
    const set1 = new Set();
    const set2 = new Set();
    this.facDetails = this.auth.getFacultyDetails();
    for (let i = 0; i < this.facDetails.length; i++) {
      set1.add(this.facDetails[i]['year']);
      set2.add(this.facDetails[i]['section']);
    }
    const itr1 = set1.values();

    for (let i = 0; i < set1.size; i++) {
      this.years.push(itr1.next().value);
    }

    const itr2 = set2.values();

    for (let i = 0; i < set2.size; i++) {
      this.sections.push(itr2.next().value);
    }
  }

  generateCode() {
    const obj = this.auth.getFacultyDetails();
    // console.log(obj);
    const data = {
      year: this.selectedYear,
      section: this.selectedSection
    };
    // console.log(data);
    this.loginService.generateRandomLoginCode(data).subscribe(res => {
      this.code = res.code;
    });
  }

}
