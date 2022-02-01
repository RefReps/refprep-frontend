import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/environments/environment';
import { TokenService } from '../_services/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authenticateService: AuthenticationService,
    private tokenService: TokenService,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isLoggedIn()) {
      request = request.clone({
        setHeaders: { 'Authorization': `Bearer ${this.tokenService.getToken()}`}
      })
    }
    return next.handle(request);
  }

  private isLoggedIn(): boolean {
    if (this.tokenService.getToken()) {
      return true
    }
    return false
  }
}
