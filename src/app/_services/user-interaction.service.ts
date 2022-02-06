import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {

  constructor(
    private tokenService: TokenService,
  ) { }

  get isAdmin(): boolean {
    return this.tokenService.getUserRole() === 'admin'
  }
}
