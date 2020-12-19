import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";

import { JwtService } from './../../shared/jwt.service';
import { TokenAuthService } from '../../shared/token-auth.service';
import { AuthenticationStateService } from '../../shared/authentication-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  err = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
    private tokenAuthService: TokenAuthService,
    private authenticationStateService: AuthenticationStateService,
  ) {
    this.signinForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() { }

  onSubmit() {
      this.jwtService.logIn(this.signinForm.value).subscribe(
        res => {
          this.tokenStorage(res);
        },
        error => {
          this.err = error.error;
        },() => {
          this.authenticationStateService.setAuthState(true);
          this.signinForm.reset()
          this.router.navigate(['user-profile']);
        }
      );
  }

  tokenStorage(jwt){
    this.tokenAuthService.setTokenStorage(jwt.access_token);
  }

}