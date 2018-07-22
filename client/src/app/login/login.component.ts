import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService : AuthService) { }

  ngOnInit() {
    $.material.init();
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    if(localStorage.getItem("isLogin") == '1'){
      this.router.navigate(['/app/dashboard']);
    }
  }

   onSubmit() {
     if (this.loginForm.value.userName !== '' && this.loginForm.value.password !== '' ) {
       this.authService.login();
       this.router.navigate(['/app/dashboard']);
    }
   }
}
