import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../../guards/index';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
