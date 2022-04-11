import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token'
const REFRESH_TOKEN = 'refresh_token'
const EMAIL = 'email'
const ROLE = 'user_role'
const IS_AUTHOR = 'isAuthor'
const FIRST_NAME = 'firstName'
const LAST_NAME = 'lastName'

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

  getUserFirstName(): string {
    return localStorage.getItem(FIRST_NAME)!
  }

  getUserLastName(): string {
    return localStorage.getItem(LAST_NAME)!
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

  saveUserFirstName(firstName: string): void {
    localStorage.setItem(FIRST_NAME, firstName)
  }

  saveUserLastName(lastName: string): void {
    localStorage.setItem(LAST_NAME, lastName)
  }

  saveUserRole(role: string): void {
    localStorage.setItem(ROLE, role)
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
