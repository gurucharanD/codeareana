import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  isValidUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/studentLogin', JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }

  facultyLogin(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/facultyLogin', JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }

  postQuestion(question) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/postQuestion', JSON.stringify(question), { headers: headers })
      .map(res => res.json());
  }

  getQuestions(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/getQuestions', JSON.stringify(data), { headers: headers })
      .map(res => res.json());
  }

  getAnsweredQuestions(data) {
    // console.log(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/getAnsweredQuestions', data, { headers: headers })
      .map(res => res.json());
  }

  generateRandomLoginCode(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/generateCode', data, { headers: headers })
      .map(res => res.json());

  }


  run(code) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/run', JSON.stringify(code), { headers: headers })
      .map(res => res.json());
  }

  compile(code) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/compile', JSON.stringify(code), { headers: headers })
      .map(res => res.json());
  }

  submitMarks(marks) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/updateMarks', JSON.stringify(marks), { headers: headers })
      .map(res => res.json());
  }

  getMarks(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/getMarks', JSON.stringify(data), { headers: headers })
      .map(res => res.json());
  }

  getStudentMarks(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/getStudentMarks', JSON.stringify(data), { headers: headers })
      .map(res => res.json());
  }

  getFilteredMarks(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/filterMarks', JSON.stringify(data), { headers: headers })
      .map(res => res.json());
  }

  saveMarks(marks) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/saveMarks', JSON.stringify(marks), { headers: headers })
      .map(res => res.json());
  }

  isValidAdmin(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/adminLogin', JSON.stringify(user), {
      headers: headers
    })
      .map(res => res.json());
  }
}
