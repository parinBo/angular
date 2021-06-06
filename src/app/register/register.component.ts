import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nameForm = new FormControl('',[Validators.required]);
  emailForm = new FormControl('', [Validators.required,Validators.email,]);
  passwordForm = new FormControl('',[Validators.required,Validators.minLength(6)])
  conPasswordForm = new FormControl('',[Validators.required,Validators.minLength(6)])
  hide1 = true;
  hide2 = true;
  constructor(private user:UserService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.passwordForm.value!==this.conPasswordForm.value){
      console.log("Password doesn't match")
    }else{
      this.user.register(this.emailForm.value,this.passwordForm.value,this.nameForm.value)
    }
  }

}
