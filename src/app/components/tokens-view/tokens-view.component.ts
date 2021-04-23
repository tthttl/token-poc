import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Token, TokenType } from '../../models/model';

@Component({
  selector: 'app-tokens-view',
  templateUrl: './tokens-view.component.html',
  styleUrls: ['./tokens-view.component.scss']
})
export class TokensViewComponent {

  @Input() idToken: Token;
  @Input() authorizationToken: Token;
  @Output() login: EventEmitter<void> = new EventEmitter();
  @Output() changeToken: EventEmitter<{ type: TokenType, token: string}> = new EventEmitter();

  loginClicked(){
    this.login.emit();
  }

  tokenChanged(type: TokenType, token){
    this.changeToken.emit({type, token});
  }

}
