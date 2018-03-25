import {
  AuthenticationService
} from './../authentication.service';
import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  Student
} from '../Student';
import {
  LoginService
} from '../login-service.service';
import * as jsPDF from 'jspdf-autotable';

@Component({
  selector: 'app-faculty-menu',
  templateUrl: './faculty-menu.component.html',
  styleUrls: ['./faculty-menu.component.css'],
  providers: [{
    provide: 'Window',
    useValue: window
  }]
})
export class FacultyMenuComponent implements OnInit {

  year: number;
  section: string;
  viewMarks = false;
  students: Student[];
  marksScored = 0;

  facDetails = [];
  marks;
  quizmarks;
  years = [];
  sections = [];
  constructor(@Inject('Window') private window: Window, private auth: AuthenticationService, private _loginService: LoginService) { }

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

  getMarks() {
    const data = {
      year: this.year,
      section: this.section
    };
    this._loginService.getMarks(data)
      .subscribe(res => {
        console.log(res);
        this.students = res;
        this.viewMarks = true;
      });
  }

  download() {
    const columns = ['UserName', 'Marks'];
    const rows = [];
    for (let i = 0; i < this.students.length; i++) {
      rows.push([this.students['username']]);
    }

    const doc = new jsPDF();
    doc.autoTable(columns, rows);

    doc.save('table.pdf');

    // doc.save('code.pdf');
  }

  getFilteredReports() {
    console.log('called');
    const data = {
      year: this.year,
      section: this.section,
      marks: this.marks,
      quizmarks: this.quizmarks
    };
    console.log(data);
    this._loginService.getFilteredMarks(data).subscribe(res => {
      console.log(res);
      this.students = res;
      if (this.students.length == 0) {
        this.window.alert('empty records generated');
        this.viewMarks = false;
      }
      this.viewMarks = true;
    });
  }

}
