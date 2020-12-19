import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/signup', user);
  }

  logIn(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/signin', user);
  }

  profile(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user');
  }

  // req-password-reset
  reqPasswordReset(data) {
    return this.http.post('http://127.0.0.1:8000/api/auth/req-password-reset', data)
  }  

  // update password
  updatePassword(data) {
    return this.http.post('http://127.0.0.1:8000/api/auth/update-password', data)
  }

}