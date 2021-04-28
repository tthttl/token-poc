import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Token } from '../models/model';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.startsWith(environment.apiUrl)){
      return this.tokenService.getToken('authorizationToken')
        .pipe(
          take(1),
          switchMap((token: Token) => {
            const request = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token.value}`
              }
            })
            return next.handle(request);
          })
        );
    }
    return next.handle(req);
  }

}
