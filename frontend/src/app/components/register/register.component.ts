import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { JwtService } from './../../shared/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  err = null;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public jwtService: JwtService
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    this.jwtService.signUp(this.signupForm.value).subscribe(
      res => {
        console.log(res)
      },
      error => {
        this.err = error.error;
      },
      () => {
        this.signupForm.reset()
        this.router.navigate(['signin']);
      }
    )
  }

}