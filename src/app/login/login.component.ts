import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
email:string = ""; 
pwd:string = "";

login(){
  if(this.email==""){
    alert("name cannot blank");
  }else if(this.pwd.length<8){
    alert("cannot blank");

  }else{
    let url = "https://product-mock-api.herokuapp.com/sportsshopapp/api/v1/auth/login";
    let formData = {
      email: this.email,
      pwd: this.pwd
    }

    axios.post(url, formData).then(res => {
      let data = res.data;
      console.log(data);
      alert("Successffully Login");
      window.location.href = "listTask"
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      alert("Error-" + errorMessage);
    });
  }
  
}
}

