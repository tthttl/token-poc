import { OidcSecurityService } from 'angular-auth-oidc-client';

export function reAuthenticate(securityService: OidcSecurityService) {
  return () => new Promise((resolve) => {
    if (securityService.getRefreshToken()) {
      securityService.forceRefreshSession()
        .subscribe((result) => {
          console.log(`Authentication successful: ${result}`);
          resolve();
        });
    } else {
      resolve();
    }
  });
}
