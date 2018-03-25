import { QuizService } from './../quiz.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  tot: number;
  postButton = false;
  boxes = [];
  years = [];
  sections = [];
  selectedYear;
  selectedWeek;
  selectedSection;
  questions = [];
  answers = [];
  option_one = [];
  option_two = [];
  option_three = [];
  option_four = [];
  facDetails = [];

  constructor(private auth: AuthenticationService, private quiz: QuizService) { }

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
  getQuestionBoxes() {
    console.log('called');
    this.postButton = true;
    for (let i = 0; i < this.tot; i++) {
      this.boxes.push(i);
    }
  }

  sendQuestions() {

    console.log('called sendind');
    for (let i = 0; i < this.tot; i++) {
      const consolidated_question = {
        question: this.questions[i],
        answer: this.answers[i],
        option_one: this.option_one[i],
        option_two: this.option_two[i],
        option_three: this.option_three[i],
        option_four: this.option_four[i],
        section: this.selectedSection.toLowerCase(),
        week: this.selectedWeek,
        year: this.selectedYear,
        postedBy: Cookie.get('username')
      };
      this.quiz.postQuizQuestions(consolidated_question).subscribe(res => {
        if (res.msg) {
          alert(`Quiz question ${i + 1} Posted Successfully`);
        }else {
          alert(`Quiz question ${i + 1} Posting Unsuccessfull`);
        }
      });


    }

  }

}
