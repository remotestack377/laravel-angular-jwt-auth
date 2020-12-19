import { Component } from '@angular/core';
import { JwtService } from './../../shared/jwt.service';

export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  user: User;

  constructor(
    public jwtService: JwtService
  ) {
    this.jwtService.profile().subscribe((res:any) => {
      this.user = res;
    })
  }

}