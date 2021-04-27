import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'token-poc';

  constructor(private securityService: OidcSecurityService) {
  }

  ngOnInit(): void {
    this.securityService.checkAuth().subscribe((isAuthenticated) => {
      console.log(isAuthenticated);
      console.log(this.securityService.getToken());
      console.log(this.securityService.getRefreshToken());
      console.log(this.securityService.getIdToken());
      console.log(this.securityService.getPayloadFromIdToken());
    })
  }


}
