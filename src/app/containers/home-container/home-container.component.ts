import { Component, OnInit } from '@angular/core';
import { OidcSecurityService, PublicEventsService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EventTypes } from '../../../../../angular-auth-oidc-client/dist/angular-auth-oidc-client';

import { Token, TokenType } from '../../models/model';
import { HelloService } from '../../services/hello.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  idToken: Observable<Token>;
  authorizationToken: Observable<Token>;
  apiResponse: Observable<string>;

  constructor(
    private tokenService: TokenService,
    private helloService: HelloService,
    private securityService: OidcSecurityService,
    private eventService: PublicEventsService
  ) {
  }

  ngOnInit(): void {
    this.idToken = this.tokenService.getToken('idToken');
    this.authorizationToken = this.tokenService.getToken('authorizationToken');
    this.eventService
      .registerForEvents()
      .pipe(filter((notification) => notification.type === EventTypes.ConfigLoaded))
      .subscribe((config) => {
        console.log('ConfigLoaded', config);
      });
  }

  loginClicked() {
    this.securityService.authorize();
  }

  sayHelloClicked() {
    this.apiResponse = this.helloService.sayHello();
  }

  invalidateClicked() {
    // delete or expire token(s)
  }

  tokenChanged(payload: { type: TokenType, token: string }) {
    this.tokenService.setToken(payload.token, payload.type);
  }

}
