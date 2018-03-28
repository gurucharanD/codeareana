import { Quiz } from './../Quiz';
import { QuizService } from './../quiz.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { QueServiceService } from '../que-service.service';
import { LoginService } from '../login-service.service';
import { Question } from '../Question';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {


  score = 0;
  questions: Question[];
  wrong_answers = [];
  quizQuestions;
  fac_answers = [];
  stu_answers = [];
  selectedQuestion: object;
  isReturned = false;
  selectedWeek: number;
  showQuestions = false;
  selectedYear: number;
  noQuestions = false;
  noQuiz = false;
  quizDisplay = false;
  marksDisplay = false;

  answeredQuestions;
  displayQuestions: Question[] = [];
  k = 0;
  form: FormGroup;
  week: FormControl;

  constructor(
    private queService: QueServiceService,
    private fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router,
    private authService: AuthenticationService,
    private quiz: QuizService) { }

  ngOnInit() {
    this.form = this.fb.group({
      week: ['', Validators.required]
    });
  }

  sendQuestion(question) {
    this.queService.selectedQuestion(question);
    console.log(question);
    this.router.navigate(['editor']);
  }

  showQuestionForWeek() {
    this.marksDisplay = false;
    this.noQuiz = false;
    this.quizDisplay = false;
    this.displayQuestions = [];
    const query = {
      username: this.authService.getUserName()
    };
    this._loginService.getAnsweredQuestions(query)
      .subscribe(res => {
        this.answeredQuestions = res;
        console.log(this.answeredQuestions);
        this.getTotalQuestions();
      });
  }

  onChangeWeek() {
    this.displayQuestions = [];
  }
  getTotalQuestions() {
    const data = {
      week: this.form.get('week').value,
      year: this.authService.getUserYear(),
      section: this.authService.getUserSection()
    };
    console.log(data);
    this._loginService.getQuestions(data).subscribe(res => {
      this.questions = res;
      if (this.questions.length === 0) {
        this.noQuestions = true;
      } else {
        this.noQuestions = false;
        Cookie.set('week', this.form.get('week').value + ' ');
        this.showQuestions = true;

        if (this.answeredQuestions.length === 0) {
          this.displayQuestions = this.questions;
        } else {
          // console.log(this.questions);
          this.calculateArray();
        }
      }
    });
  }
  calculateArray() {
    const aq = this.answeredQuestions[0]['marks'];

    console.log(aq);
    console.log(this.questions);

    let i, j;
    for (i = 0; i < this.questions.length; i++) {
      for (j = 0; j < aq.length; j++) {
        if (aq[j].qid !== this.questions[i]['_id']) {
          this.displayQuestions.push(this.questions[i]);
        }
      }

    }


    console.log(this.displayQuestions);
  }

  showQuiz() {
    if (this.noQuestions) {
      this.noQuestions = false;
    }
    this.showQuestions = false;
    this.noQuiz = false;
    this.quizDisplay = true;
    const data = {
      week: this.form.get('week').value,
      year: this.authService.getUserYear(),
      section: this.authService.getUserSection().toLowerCase()
    };
    console.log(data);

    this.quiz.getQuizQuestions(data).subscribe(res => {
      console.log(res);
      if (res.length === 0) {
        this.quizDisplay = false;
        this.noQuiz = true;
      }
      this.marksDisplay = false;
      this.quizQuestions = res;
      for (const iterator of res) {
        this.fac_answers.push(iterator.answer);
      }
    });
  }

  validateAnswers() {
    for (let i = 0; i < this.stu_answers.length; i++) {
      if (this.stu_answers[i] == this.fac_answers[i]) {
        this.score += 1;
      } else {
        this.wrong_answers.push(i);
      }
    }
    this.quizDisplay = false;
    console.log(this.score);
    this.marksDisplay = true;
    const data = {
      username: this.authService.getUserName(),
      week: this.form.get('week').value,
      year: this.authService.getUserYear(),
      section: this.authService.getUserSection(),
      quizmarks: this.score
    };
    console.log('in component', data);
    this.quiz.saveQuizMarks(data).subscribe(res => {
      console.log(res);
      if (res.data == null && res.userdata == null) {
        window.alert('Marks Not Saved !!!');
      } else {
        window.alert('Marks saved successfully!');
      }
    }
    );
  }



}






