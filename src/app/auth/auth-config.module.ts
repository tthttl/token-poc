import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { LogLevel } from '../../../../angular-auth-oidc-client/dist/angular-auth-oidc-client';
import { environment } from '../../environments/environment';
import { AuthStorage } from './auth-storage.service';


export function configureAuth(oidcConfigService: OidcConfigService): () => Promise<any> {
  return () =>
    oidcConfigService.withConfig({
      secureRoutes: [environment.apiUrl, 'localhost:9080/api/poc'],
      stsServer: 'https://id-dev.css.ch/auth/oauth2/css-login',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'css-login',
      scope: 'openid email', // 'openid profile offline_access ' + your scopes
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      renewTimeBeforeTokenExpiresInSeconds: 30,
      logLevel: LogLevel.Debug,
      disableRefreshIdTokenAuthTimeValidation: true
    });
}

@NgModule({
  imports: [AuthModule.forRoot()],
  exports: [AuthModule],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
})
export class AuthConfigModule {
}
