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

  userSelectedWeek;
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

  studentDetails = {};
  displayStudentInfo = true;


  answeredQuestions;
  displayQuestions: Question[] = [];
  k = 0;
  form: FormGroup;
  week: FormControl;

  quizAnsweredWeeks = [];

  constructor(
    private queService: QueServiceService,
    private fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router,
    private authService: AuthenticationService,
    private quizService: QuizService,
    private quiz: QuizService) { }

  ngOnInit() {
    this.form = this.fb.group({
      week: ['', Validators.required]
    });


    const query = {
      username: this.authService.getUserName(),
      year: this.authService.getUserYear(),
      section: this.authService.getUserSection()
    };

    this.quizService.getAnsweredQuizWeeks(query).subscribe(res => {
      // console.log("answered ", res);
      this.quizAnsweredWeeks = res;
    });

    this.studentDetails['name'] = this.authService.username;
    this.studentDetails['year'] = this.authService.studentYear;
    this.studentDetails['section'] = this.authService.studentSection;

  }

  sendQuestion(question) {
    this.queService.selectedQuestion(question);
    // console.log(question);
    this.router.navigate(['editor']);
  }

  showQuestionForWeek() {
    this.displayStudentInfo = false;
    this.marksDisplay = false;
    this.noQuiz = false;
    this.quizDisplay = false;
    this.displayQuestions = [];
    const query = {
      username: this.authService.getUserName()
    };
    this._loginService.getAnsweredQuestions(query)
      .subscribe(res => {
        console.log(res);
        this.answeredQuestions = res.length > 0 ? res[0].marks : res;
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
    // console.log(data);
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
          this.calculateArray();
        }
      }
    });
  }
  calculateArray() {
    const aq = this.answeredQuestions;
    for (let i = 0; i < aq.length; i++) {
      this.questions = this.questions.filter(question => question['_id'] !== aq[i].qid);
    }
    this.displayQuestions = this.questions;

    if (this.displayQuestions.length === 0) {
      alert('You have already answered all the questions');
    }
    console.log(this.displayQuestions);
  }

  showQuiz() {
    this.displayStudentInfo = false;
    if (this.noQuestions) {
      this.noQuestions = false;
    }
    this.showQuestions = false;
    this.noQuiz = false;
    this.userSelectedWeek = this.form.get('week').value;
    this.quizDisplay = false;
    const result = this.isWeekAnswered(this.userSelectedWeek);
    if (!result) {

      const data = {
        week: this.form.get('week').value,
        year: this.authService.getUserYear(),
        section: this.authService.getUserSection().toLowerCase()
      };
      // console.log(data);

      this.quiz.getQuizQuestions(data).subscribe(res => {
        // console.log(res);
        if (res.length === 0) {
          this.quizDisplay = false;
          this.noQuiz = true;
        }
        this.marksDisplay = false;
        this.quizQuestions = res;
        for (const iterator of res) {
          this.fac_answers.push(iterator.answer);
        }
        this.quizDisplay = true;
      });
    } else {
      alert('Quiz for the selected week is already attempted');
    }
  }

  public isWeekAnswered(week) {
    for (let i = 0; i < this.quizAnsweredWeeks.length; i++) {
      if (this.quizAnsweredWeeks[i] === week) {
        return true;
      }
    }
    return false;
  }


  validateAnswers() {
    for (let i = 0; i < this.stu_answers.length; i++) {
      if (this.stu_answers[i] === this.fac_answers[i]) {
        this.score += 1;
      } else {
        this.wrong_answers.push(i);
      }
    }
    this.quizDisplay = false;
    // console.log(this.score);
    this.marksDisplay = true;
    const data = {
      username: this.authService.getUserName(),
      week: this.form.get('week').value,
      year: this.authService.getUserYear(),
      section: this.authService.getUserSection(),
      quizmarks: this.score,
      attemptedQuizWeek: this.userSelectedWeek
    };
    // console.log('in component', data);
    this.quiz.saveQuizMarks(data).subscribe(res => {
      // console.log(res);
      if (res.data == null && res.userdata == null) {
        window.alert('Marks Not Saved !!!');
      } else {
        window.alert('Marks saved successfully!');
      }
    }
    );
  }



}






