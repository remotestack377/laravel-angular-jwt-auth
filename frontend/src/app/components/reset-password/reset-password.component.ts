import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../shared/jwt.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {

  myForm: FormGroup;
  err = null;
  msg = null;

  constructor(
    public fb: FormBuilder,
    public jwtService: JwtService
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void { }

  onSubmit(){
    this.jwtService.reqPasswordReset(this.myForm.value).subscribe(
      (res) => {
        this.msg = res;
      },(error) => {
        this.err = error.error.message;
      })
  }

}
