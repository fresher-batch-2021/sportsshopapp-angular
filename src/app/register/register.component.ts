import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "";
  email: string = "";
  pswd: string = "";
  cpwd: string = "";

  login() {
    if (this.name == "") {
      alert("Name Cannot blank");
    }

    else if (this.email == "") {
      alert("Email Cannot Blank");
    }

    else if (this.pswd.length < 5) {
      alert("cannot blank");
    }

    else if (this.pswd != this.cpwd) {
      alert("Wrong Password");
    }

    else {

      let formData = {
        name: this.name,
        email: this.email,
        password: this.pswd
      }

      let url = "https://product-mock-api.herokuapp.com/sportsshopapp/api/v1/auth/register";

      
      axios.post(url, formData).then(res => {
        let data = res.data;
        console.log(data);
        // console.log(userObj);

        alert("Registration Successfull");
        window.location.href = "login"

      }).catch(err => {
        console.error(err);
        alert("Unable to register");
      });
    }
  }


  }