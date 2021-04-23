import { Routes } from '@angular/router';
import { HomeContainerComponent } from './app/containers/home-container/home-container.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
