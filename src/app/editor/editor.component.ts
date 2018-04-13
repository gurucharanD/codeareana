import { AuthenticationService } from './../authentication.service';
import { Component, OnInit, Inject, OnDestroy, ViewChild } from '@angular/core';
import { QueServiceService } from '../que-service.service';
import { LoginService } from '../login-service.service';
import * as jsPDF from 'jspdf';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';
import { RouterModule, Routes, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [{ provide: 'Window', useValue: window }]

})
export class EditorComponent implements OnInit {

  @ViewChild('editor') editor;
  options: any = { maxLines: 1000, printMargin: false };
  showScore = false;
  score = 0;
  wrong = 0;
  code = '';
  tick: string;
  lang: string;
  compileStatus: string;
  input: string[];
  output: string[];
  runStatus: string;
  question: object;
  langOpt = 0;
  time: string;
  err;

  outputResult = true;
  showOutput = false;
  sampleResult = false;

  private subscription: Subscription;

  timeOfProblem = 60;

  constructor(@Inject('Window') private window: Window, private auth: AuthenticationService,
    private router: Router, private queService: QueServiceService, private _loginService: LoginService) {
    this.question = this.queService.getSelectedQuestion();


  }

  ngOnInit() {

  }


  onChange(code) {
    console.log('new code', code);
}




  download() {
    // console.log('calling');
    const doc = new jsPDF();
    doc.text(20, 20, this.code);
    doc.save('code.pdf');
  }

  runSampleTestCases() {
    this.showScore = false;
    this.input = this.queService.getInput();
    this.output = this.queService.getOutput();
    console.log(this.input);
    if (this.code !== '' && this.lang !== '') {

      const code = {
        code: this.code,
        lang: parseInt(this.lang, 10),
        input: this.input[0]
      };
      this._loginService.compile(code)
        .subscribe(res => {
          this.err = res;
          if (res.toString().trim() !== this.output[0].toString()) {
            this.outputResult = false;
            this.sampleResult = false;
          } else {
            this.sampleResult = true;
            this.outputResult = true;
          }

          this.showOutput = true;

        });
    } else {
      alert('CODE / LANGUAGE cannot be empty');
    }
  }



  submitScore() {
    alert('Are you Sure You want to submit?');
    const data = {
      username: this.auth.getUserName()
    };
    const marks = {
      qid: this.question['_id'],
      questionName: this.question['name'],
      marksScored: this.score,
      isAttempted: true,
    };

    this._loginService.getStudentMarks(data)
      .subscribe(res => {
        // console.log(res);
        // console.log('scored marks : ', marks.marksScored);
        if (res === undefined || res === null) {
          const updatemarks = {
            username: this.auth.getUserName(),
            year: this.auth.getUserYear(),
            section: this.auth.getUserSection(),
            week: Cookie.get('week'),
            marks: [marks]
          };
          console.log(updatemarks);
          this._loginService.saveMarks(updatemarks)
            .subscribe(result => {
              alert(result.msg);

              this.router.navigate(['dashboard']);
            });

        } else {
          console.log('database :', res.marks);
          let usermarks = [];
          usermarks = res.marks;
          usermarks.push(marks);
          console.log(usermarks);
          const Updatemarks = {
            username: this.auth.getUserName(),
            year: this.auth.getUserYear(),
            section: this.auth.getUserSection(),
            week: Cookie.get('week'),
            marks: usermarks
          };


          this._loginService.submitMarks(Updatemarks)
            .subscribe(result => {
              console.log(result.marks);
              alert(result.msg);

              this.router.navigate(['dashboard']);
            });
        }
      });

  }








  run() {
    this.input = this.queService.getInput();
    this.output = this.queService.getOutput();

    if (this.code !== '' && this.lang !== '') {

      const code = {
        code: this.code,
        lang: parseInt(this.lang, 10),
        input: this.input
      };


      this._loginService.run(code)
        .subscribe(res => {
          this.err = res;
          for (let i = 0; i < res.length; i++) {
            if (res[i].toString().trim() !== this.output[i].toString()) {
              this.wrong++;
              this.outputResult = false;
              break;
            }
          }
          console.log(res);
          this.score = (res.length - this.wrong) * 5 / res.length;
          console.log(this.score);
          this.showScore = true;
          if (this.outputResult) {
            this.sampleResult = false;
          }
          this.showOutput = true;

        });
    } else {
      alert('CODE / LANGUAGE cannot be empty');
    }
  }

}

