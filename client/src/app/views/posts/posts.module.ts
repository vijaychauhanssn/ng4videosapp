// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {PostsComponent} from './posts.component';
// Components Routing
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule,
  ],
  declarations: [
    PostsComponent
  ]
})
export class PostsModule { }
