import { QuizService } from './quiz.service';
import {
  LoginComponent
} from './login/login.component';
import {
  AuthGuard
} from './auth.guard';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import {
  CookieService
} from 'angular2-cookie/services/cookies.service';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  routes
} from './app.router';
import {
  QueServiceService
} from './que-service.service';
import {
  LoginService
} from './login-service.service';
import {
  HttpModule
} from '@angular/http';
import {
  Http
} from '@angular/http';
import {
  UserAccountService
} from './user-account.service';


import {
  AppComponent
} from './app.component';

import {
  EditorComponent
} from './editor/editor.component';
import {
  RegisterService
} from './register.service';
import {
  PostQuestionComponent
} from './post-question/post-question.component';
import {
  CopyrightsComponent
} from './copyrights/copyrights.component';
import {
  FacultyMenuComponent
} from './faculty-menu/faculty-menu.component';
import {
  KeysPipe
} from './keys.pipe';
import {
  ShowQuestionsFacultyComponent
} from './show-questions-faculty/show-questions-faculty.component';

import {
  HomeComponent
} from './home/home.component';
import {
  AuthenticationService
} from './authentication.service';
import {
  AdminComponent
} from './admin/admin.component';
import {
  MappingComponent
} from './mapping/mapping.component';
import {
  MappingService
} from './mapping.service';
import {
  MdlModule
} from '@angular-mdl/core';
import {
  QuizComponent
} from './quiz/quiz.component';
import { FacRegisterComponent } from './fac-register/fac-register.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    EditorComponent,
    PostQuestionComponent,
    CopyrightsComponent,
    FacultyMenuComponent,
    KeysPipe,
    ShowQuestionsFacultyComponent,
    HomeComponent,
    AdminComponent,
    MappingComponent,
    QuizComponent,
    FacRegisterComponent,
    CodeGeneratorComponent,

  ],
  imports: [
    AceEditorModule,
    MdlModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    routes,

  ],
  providers: [FormBuilder,
     AuthenticationService,
     QuizService,
      AuthGuard, UserAccountService, CookieService, QueServiceService, LoginService, RegisterService, MappingService],

  bootstrap: [AppComponent]
})
export class AppModule {}
