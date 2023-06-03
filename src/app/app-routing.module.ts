import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/projects/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'cv',
    loadComponent: () => import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint.component').then((m) => m.ImprintComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
