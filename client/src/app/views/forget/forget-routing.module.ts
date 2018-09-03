import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

import { ForgetComponent } from './forget.component';
import { AuthGuard } from '../../guards/index';

const routes: Routes = [
  {
    path: '',
    component: ForgetComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Forget'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetRoutingModule {}
