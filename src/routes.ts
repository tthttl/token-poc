import { Routes } from '@angular/router';
import { HomeComponent } from './app/containers/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
