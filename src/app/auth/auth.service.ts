import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthData} from './auth-data';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    private  token: string;
    private authStatusListener = new Subject<boolean>();

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(email: string, password: string) {
    const authData: AuthData = {email, password};
    this.http.post('http://localhost:3000/api/user/signup', authData)
        .subscribe(response => {
          console.log(response);
        });
  }

  login(email:string, password: string){
      const authData: AuthData = {email, password};
      this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
          .subscribe(response => {
              const token = response.token;
              this.token = token;
              if (token) {
                  this.isAuthenticated = true;
                  this.authStatusListener.next(true);
              }
          });
  }
  constructor(private http: HttpClient) {}

  logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
  }
}
