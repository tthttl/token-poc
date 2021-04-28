export type TokenType = 'idToken' | 'authorizationToken' | 'refreshToken';

export interface JwtPayload {
  readonly exp: number;
  readonly groups: string [];
  readonly iat: number;
  readonly iss: string;
  readonly sub: string;
}

export interface Token {
  readonly type: TokenType;
  readonly value: string;
  readonly payload: JwtPayload;
  readonly isValid: boolean;
}

export class TokenImpl implements Token{

  constructor(
    readonly type: TokenType,
    readonly value: string,
    readonly payload: JwtPayload,
    readonly isValid: boolean) {
  }

}
