import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Token } from '../models/model';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.tokenService.getToken('authorizationToken')
      .pipe(
        take(1),
        switchMap((token: Token) => {
          req.headers.append('Authorization', `Bearer ${token.value}`);
          return next.handle(req);
        })
      );
  }

}
