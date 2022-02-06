import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'
const EMAIL = 'email'
const ROLE = 'role'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN)!
  }

  getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN)!
  }

  getEmail(): string {
    return localStorage.getItem(EMAIL)!
  }

  getUserRole(): string {
    return localStorage.getItem(ROLE)!
  }

  saveToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
  }

  saveEmail(email: string): void {
    localStorage.setItem(EMAIL, email)
  }

  saveUserRole(role: string): void {
    localStorage.setItem(ROLE, role)
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN)
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN)
  }

  removeEmail(): void {
    localStorage.removeItem(EMAIL)
  }

  removeRole(): void {
    localStorage.removeItem(ROLE)
  }

  emptyLocalStorage(): void {
    this.removeEmail()
    this.removeRole
    this.removeRefreshToken()
    this.removeToken()
  }
}
