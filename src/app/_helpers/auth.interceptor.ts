import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../_services/token.service';
import { AuthService } from '../_services/auth.service';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken()
    const refreshToken = this.tokenService.getRefreshToken()

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      })
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'appliciation/json')
    })

    return next.handle(request)
  //   .pipe(
  //     map((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         console.log('event--->>>', event)
  //       }
  //       return event
  //     }),
  //     catchError((error: any) => {
  //       if (error.status === 401) {
  //         if (error.error.error === 'invalid_token') {
  //           this.authService.refreshToken({refreshToken: refreshToken})
  //             .subscribe(() => {
  //               location.reload()
  //             })
  //         } else {
  //           this.router.navigate(['/login']).then(_ => console.log('redirected to login'))
  //         }
  //       }
  //       return throwError(error)
  //     })
  //   )
  }
}
