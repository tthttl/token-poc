import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokensViewComponent } from './components/tokens-view/tokens-view.component';
import { TokensUseComponent } from './components/tokens-use/tokens-use.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
