import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService : AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   onSubmit() {
     if (this.loginForm.value.userName !== '' && this.loginForm.value.password !== '' ) {
       this.authService.login();
       this.router.navigate(['/app/dashboard']);
    }
   }
}
