import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostsComponent} from './posts.component';
import { AuthGuard } from '../../guards/index';
const routes: Routes = [
  {
    path: '',
    component:PostsComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Post'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
