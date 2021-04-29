import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Token, TokenType } from '../../models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() idToken: Token;
  @Input() authorizationToken: Token;
  @Input() apiResponse: string;
  @Output() sayHello: EventEmitter<void> = new EventEmitter();
  @Output() invalidate: EventEmitter<void> = new EventEmitter();
  @Output() login: EventEmitter<void> = new EventEmitter();
  @Output() changeToken: EventEmitter<{ type: TokenType, token: string}> = new EventEmitter();

  loginClicked(){
    this.login.emit();
  }

  sayHelloClicked(){
    this.sayHello.emit();
  }

  invalidateClicked(){
    this.invalidate.emit();
  }

  tokenChanged(payload: { type: TokenType, token: string}){
    this.changeToken.emit({type: payload.type, token: payload.token});
  }

}
