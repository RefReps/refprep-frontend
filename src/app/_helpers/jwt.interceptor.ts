import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/environments/environment';
import { TokenService } from '../_services/token.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private tokenService: TokenService,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const isLoggedIn = this.tokenService.getToken();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.tokenService.getToken()}` }
        });
    }

    return next.handle(request);
}


}
