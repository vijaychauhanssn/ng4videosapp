// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {ForgetComponent} from './forget.component';
// Components Routing
import { ForgetRoutingModule } from './forget-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForgetRoutingModule,
  ],
  declarations: [
    ForgetComponent
  ]
})
export class ForgetModule { }
