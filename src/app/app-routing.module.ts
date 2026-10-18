import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';

const routes: Routes = [

  // Main single-page portfolio
  {
    path: '',
    component: PortfolioComponent
  },

  // Individual project details
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },

  // Unknown routes
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}