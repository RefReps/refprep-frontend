import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AuthenticationService } from '../_services/authentication.service';
import { TokenService } from '../_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const user = this.authenticationService.userValue
      if (this.tokenService.getToken()) {
        return true
      } else {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
        return false
      }
      // const url: string = state.url

      // return this.checkLogin(url)
  }

  // checkLogin(url: string): boolean {
  //   if (this.tokenService.getToken()) {
  //     return true;
  //   }
  //   this.authService.redirectUrl = url

  //   this.router.navigate(['/login']).then(_ => false)
  //   return false
  // }
  
}
