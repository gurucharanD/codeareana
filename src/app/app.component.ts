import { AuthenticationService } from './authentication.service';
import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {Router} from '@angular/router' 
import {UserAccountService} from './user-account.service'
import { async } from '@angular/core/testing';
import { NavigationEnd } from '@angular/router/src/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  //isLoggedIn:boolean= Cookie.get('isStudentLoggedIn')=="1"||Cookie.get('isFacultyLoggedIn')=="1"?true:false;
  isLoggedIn:boolean
  user:string
  welcome:any
  title = 'app';

  constructor(private auth:AuthenticationService,private router:Router,private _userAccount:UserAccountService){
    this.auth.isStudentLoggedIn.subscribe(res=>{
      this.isLoggedIn=res;    
    });
    this.auth.userName.subscribe(res=>{
      this.user=res;
    });
    let date=new Date();
    let hours=date.getHours();
    if(hours<12){
      this.welcome="Good Morning"
    }
    else if(hours>=12 && hours<17){
      this.welcome="Good Afternoon"
    } 
    else{
      this.welcome="Good Evening"
    }
    console.log(this.welcome)
  }

  logout(){
    var res=confirm("Any unsaved changes will be lost");
    if(res){
     
     this.auth.setStudentLogin(false);
     this.auth.setFacutlyLogin(false);
     this.auth.setUserName('');
     this.auth.setUserYear('');
     this.router.navigate(['login']);
    }
  }




}
