import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { JwtService } from '../../shared/jwt.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})

export class UpdatePasswordComponent implements OnInit {

  updatePwd: FormGroup;
  errors = null;

  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public authService: JwtService,
  ) {
    this.updatePwd = this.fb.group({
      email: [''],
      password: [''],
      password_confirmation: [''],
      passwordToken: ['']
    })
    activatedRoute.queryParams.subscribe((params) => {
      this.updatePwd.controls['passwordToken'].setValue(params['token']);
    })
  }

  ngOnInit(): void { }

  onSubmit(){
    this.authService.updatePassword(this.updatePwd.value).subscribe(
      result => {
        alert('Password updated successfully');
        console.log(this.updatePwd.value)
        this.updatePwd.reset();
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleError(error) {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
      } else {
          errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMsg);
  }

}
