import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  loggedIn : boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:44305/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", JSON.stringify(token));
      this.invalidLogin = false;
      this.loggedIn = true;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
      this.loggedIn = false;
      console.log(err);
    });
  }

  logout(){
    this.loggedIn = false;
    localStorage.removeItem("jwt");
  }

}
