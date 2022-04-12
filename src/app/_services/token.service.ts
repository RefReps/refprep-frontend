import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'
const EMAIL = 'email'
const ROLE = 'user_role'
const USER_ID = 'user_id'
const IS_AUTHOR = 'isAuthor'

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

  getUserId(): string {
    return localStorage.getItem(USER_ID)!
  }

  getIsAuthor(): boolean {
    return localStorage.getItem(IS_AUTHOR)! === 'true'
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
  
  saveUserId(_id: string): void {
    localStorage.setItem(USER_ID, _id)
  }

  saveIsAuthor(bool: boolean): void {
    localStorage.setItem(IS_AUTHOR, `${bool}`)
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

  removeIsAuthor(): void {
    localStorage.removeItem(IS_AUTHOR)
  }

  emptyLocalStorage(): void {
    this.removeEmail()
    this.removeRole()
    this.removeRefreshToken()
    this.removeToken()
  }
}
