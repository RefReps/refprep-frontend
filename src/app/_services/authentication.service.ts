import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    this.userSubject = new BehaviorSubject<any>(null)
    this.user = this.userSubject.asObservable();
   }
  
  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, {email, password})
        .pipe(map(res => {
          this.tokenService.saveEmail(email)
          this.tokenService.saveToken(res.access_token)
          this.tokenService.saveRefreshToken(res.refresh_token)
          // this.startRefreshTokenTimer()
        }))
  }

  loginWithToken(token: string, email: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/token-login`, {refresh_token: token, email})
        .pipe(map(res => {
          this.tokenService.removeToken()
          this.tokenService.saveToken(res.access_token)
        }))
  }

  logout() {
    this.http.post<any>(`${environment.apiUrl}/api/auth/logout`, {})
    // this.stopRefreshTokenTimer()
    this.userSubject.next(null)
    this.tokenService.emptyLocalStorage()
    // this.stopRefreshTokenTimer()
    this.router.navigate(['/login'])
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/refresh-token`, {}, {headers: {'Authorization': localStorage.getItem('AUTH-REFREP')!}})
      .pipe(map((res) => {
        // this.userSubject.next(user)
        this.tokenService.saveRefreshToken(res.refresh_token)
        this.tokenService.saveToken(res.access_token)
        // this.startRefreshTokenTimer()        
      }))
  }


  private refreshTokenTimeout: any;

  private startRefreshTokenTimer() {
    if (!this.tokenService.getToken()) {
      return
    }
    // const jwtToken = atob(this.tokenService.getToken())
    const jwtToken = JSON.parse(`{"token": "${this.tokenService.getToken()}"}`)

    const expires = new Date(jwtToken.exp * 1000)
    const timeout = expires.getTime() - Date.now() - (60 * 1000)
    this.refreshTokenTimeout = setTimeout(() => {
      this.refreshToken().subscribe()
    }
    , timeout)
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout)
  }
}
