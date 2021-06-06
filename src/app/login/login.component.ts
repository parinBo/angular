import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailForm = new FormControl('', [Validators.required,Validators.email,]);
  passwordForm = new FormControl('',[Validators.required,Validators.minLength(6)])
  hide = true;

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user.login(this.emailForm.value,this.passwordForm.value)
  }
}
