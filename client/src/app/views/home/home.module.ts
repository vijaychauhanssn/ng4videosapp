// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {HomeComponent} from './home.component';
// Components Routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
