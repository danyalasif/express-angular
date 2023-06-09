import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

//@ts-ignore
const AUTH_API = `${environment.API_URL}/api/user/`;

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

  logout(): void {
    this.isLoggedIn = false;
  }
}
