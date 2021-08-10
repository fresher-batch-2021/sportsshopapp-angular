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

  if(this.email==""){
    alert("Email Cannot Blank");
  }
  
  if(this.pwd.length<8){
    alert("cannot blank");
  }

  if(this.pwd!=this.cpwd){
    alert("Wrong Password");
  }

  else{
    alert("successfull");
    window.location.href="listtask";
  }
  }

}
