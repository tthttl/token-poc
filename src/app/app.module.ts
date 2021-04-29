import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';

import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { HomeComponent } from './components/home/home.component';
import { TokensUseComponent } from './components/tokens-use/tokens-use.component';
import { TokensViewComponent } from './components/tokens-view/tokens-view.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeContainerComponent,
    TokensViewComponent,
    TokensUseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    AuthConfigModule,
    MatCardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, deps: [TokenService]}
    //{provide: APP_INITIALIZER, useFactory: reAuthenticate, multi: true, deps: [OidcSecurityService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
