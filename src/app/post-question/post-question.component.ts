import { AuthenticationService } from './../authentication.service';
import { Faculty } from './../Faculty';
import { MappingService } from './../mapping.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})

export class PostQuestionComponent implements OnInit {

  n;
  selectedYear = 1;
  selectedSection = '';
  showTestInputBox = false;
  questionName;
  input = [];
  output = [];
  question;
  week;
  showDownloadMarks = false;
  arr = [];
  years = [];
  sections = [];

  facDetails = [];


  constructor(private _loginService: LoginService, private auth: AuthenticationService,
     private router: Router, private map: MappingService) { }

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
    // console.log(this.facDetails);

  }

  // Function which shows current questions for a faculty
  showExistingQuestions() {

  }

  changeNoOfTestCases(value) {
    // console.log(value);
    this.showTestInputBox = false;
    this.n = value;
    this.testCases();
}

  testCases() {
    this.arr = [];
        for (let i = 0; i < this.n; i++) {
      this.arr[i] = i;
    }
    this.showTestInputBox = true;
  }

  submitQuestion() {
    alert('Are you Sure you want to submit ?');
    const newQuestion = {
      name: this.questionName,
      question: this.question,
      week: this.week,
      year: this.selectedYear,
      section: this.selectedSection,
      input: this.input,
      output: this.output,
      postedBy: Cookie.get('username')
    };
    this._loginService.postQuestion(newQuestion)
      .subscribe(res => {

        alert(res.msg);

      });
  }

  showMarksMenu() {
    this.showDownloadMarks = !this.showDownloadMarks;
  }

}
