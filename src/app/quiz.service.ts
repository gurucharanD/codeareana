import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  getQuizQuestions(data) {
    return this.http.post('api/showquiz', data).map(res => res.json());
  }

  postQuizQuestions(question) {
    return this.http.post('/api/postquiz', question).map(res => res.json());
  }

  saveQuizMarks(marks) {
    console.log('in service', marks);

    return this.http.post('/api/savequizmarks', marks).map(res => res.json());
  }
}
