import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    name:string = ""; 
email:string = "";
pwd:string="";
cpwd:string="";

login(){
  if(this.name==""){
    alert("Name Cannot blank");
  }

  else if(this.email==""){
    alert("Email Cannot Blank");
  }
  
  else if(this.pwd.length<5){
    alert("cannot blank");
  }

  else if(this.pwd!=this.cpwd){
    alert("Wrong Password");
  }

  else{
    alert("successfull");
    window.location.href="login";
  }
  }

}
