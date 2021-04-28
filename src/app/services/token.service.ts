import { Injectable } from '@angular/core';
import { isBefore, isDate } from 'date-fns'
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { JwtPayload, Token, TokenImpl, TokenType } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private idToken: Subject<Token> = new ReplaySubject();
  private authorizationToken: Subject<Token> = new ReplaySubject();

  constructor() {
  }

  setToken(token: string, type: TokenType) {
    const payload: JwtPayload = this.extractPayload(token);
    const isValid = this.isJwtTokenValid(payload.exp);
    const newToken = new TokenImpl(type, token, payload, isValid);
    type === 'idToken' ? this.idToken.next(newToken) : this.authorizationToken.next(newToken);
  }

  getToken(type: TokenType): Observable<Token> {
    return type === 'idToken' ? this.idToken.asObservable() : this.authorizationToken.asObservable();
  }

  extractPayload(token: string): JwtPayload {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const { exp, groups, iat, iss, sub }: JwtPayload = JSON.parse(jsonPayload);
    return {exp, groups, iat, iss, sub};
  }

  isJwtTokenValid(exp: number, now: Date = new Date()): boolean {
    const tokenExpirationDate: Date = new Date(exp * 1000);
    if (!isDate(tokenExpirationDate)) {
      return true;
    }
    return isBefore(now, tokenExpirationDate);
  }

}
