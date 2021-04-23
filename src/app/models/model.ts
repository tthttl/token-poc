export type TokenType = 'idToken' | 'authorizationToken';

export interface Token {
  readonly type: TokenType;
  value: string;
  isValid: boolean
}

export class TokenImpl implements Token{
  readonly type: TokenType;
  isValid: boolean;
  value: string | undefined;

  constructor(type: TokenType, value: string, isValid: boolean) {
    this.type = type;
    this.value = value;
    this.isValid = isValid;
  }

}
