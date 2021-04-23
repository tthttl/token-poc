import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
