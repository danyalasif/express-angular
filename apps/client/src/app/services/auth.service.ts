import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3333/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'any',
})
export class AuthService {
  isLoggedIn?: boolean;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    this.isLoggedIn = false;
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
