import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../usuarios/shared/auth.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  urlsToNotUse: Array<string>;

  constructor(
    private authApiService: AuthService
  ) {
    this.urlsToNotUse = [
      'https://viacep.com.br/ws'
    ];
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authApiService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if (req.url.indexOf('viacep') < 0) {
      if (token && !this.authApiService.isTokenExpired(token)) {
        request = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
      }

      return next.handle(request)
        .pipe(
          catchError(erro => Observable.throw(erro.message))
        );
    }else{
      return next.handle(request)
        .pipe(
          catchError(erro => Observable.throw(erro.message))
        );
    }

  }


  private handlerError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    }
  }
}
