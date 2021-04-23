import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Token, TokenImpl, TokenType } from '../models/model';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private idToken: Subject<Token> = new Subject();
  private authorizationToken: Subject<Token> = new Subject();

  constructor(private validationService: ValidationService) {
  }

  setToken(token: string, type: TokenType){
    const isValid = this.validationService.validate(token);
    const newToken = new TokenImpl(type, token, isValid);
    type === 'idToken' ? this.idToken.next(newToken) : this.authorizationToken.next(newToken);
  }

  getToken(type: TokenType): Observable<Token> {
    return type === 'idToken' ? this.idToken.asObservable() : this.authorizationToken.asObservable();
  }

}
