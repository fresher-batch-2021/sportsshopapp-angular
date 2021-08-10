import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:string = ""; 
pwd:string = "";

login(){
  if(this.name==""){
    alert("name cannot blank");
  }else if(this.pwd.length<8){
    alert("cannot blank");

  }else{
    alert("successfull");
    window.location.href="listtask";
  }
  
}
}

