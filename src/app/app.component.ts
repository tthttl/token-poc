import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private securityService: OidcSecurityService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.securityService.checkAuth().subscribe((isAuthenticated) => {
      console.log(isAuthenticated);
      if(isAuthenticated){
        this.tokenService.setToken(this.securityService.getIdToken(), 'idToken');
        this.tokenService.setToken(this.securityService.getToken(), 'authorizationToken');
      }
    })
  }


}
