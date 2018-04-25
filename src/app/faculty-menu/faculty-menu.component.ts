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
import * as fileSaver from 'file-saver';
import * as xlsx from 'xlsx';

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

  EXCEL_TYPE='aplication/vnd.openxmlformats-officedocument.spreadheetml.sheet;charset=UTF-8';
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
    let report=[];
    for (let i = 0; i < this.students.length; i++) {
      let name=this.students[i].username;
      let marks=this.students[i].marks;
      report.push({name,marks})
    }

    try{
      const ws:xlsx.WorkSheet=xlsx.utils.json_to_sheet(report);
      const wb:xlsx.WorkBook=xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb,ws,'data');

      const excelBuffer:any=xlsx.write(wb,{bookType:'xlsx',type:'buffer'})
      const data:Blob=new Blob([excelBuffer],{
        type:this.EXCEL_TYPE
      });
      fileSaver.saveAs(data,new Date().getTime()+'.xlsx');
    }catch(err){
          throw(err);
    }

    // const doc = new jsPDF();
    // doc.autoTable(columns, rows);

    // doc.save('table.pdf');

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
