import { Injectable } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationStateService {

  private userCurrentState = new BehaviorSubject<boolean>(this.tokenAuthService.isSignedin());
  userAuthState = this.userCurrentState.asObservable();

  constructor(
    public tokenAuthService: TokenAuthService
  ) { }

  setAuthState(value: boolean) {
    this.userCurrentState.next(value);
  }

}