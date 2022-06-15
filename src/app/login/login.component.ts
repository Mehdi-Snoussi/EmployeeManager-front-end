import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username!: String
  public password!: String
  public errorMessage = "invalid credentials!"
  public invalidLogin = false
  constructor() { }

  ngOnInit(): void {
  }

  public handleLogin() : void{
    console.log(this.username);
    console.log(this.password);
    if (this.username === "mehdi") {
      this.invalidLogin = true
    }
    else {
      this.invalidLogin = false
    }
  }
}
