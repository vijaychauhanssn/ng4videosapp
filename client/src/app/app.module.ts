import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to npm install
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
//end 

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Import 3rd party components
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import containers
import { DefaultLayoutComponent } from './containers/index';



import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { customHttpProvider } from './helpers/index';
import { AlertComponent } from './directives/alert/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService, VideoService, PostsService } from './services/index';
//import { HomeComponent } from './views/home/index';

import { LoginComponent } from './views/login/index';
import { RegisterComponent } from './views/register/index';
//import { ForgetComponent } from './views/forget/index';
import { AsideDirective } from './directives/aside/index';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav-dropdown/index';
import { SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective } from './directives/sidebar/index';
//import { DashboardComponent } from './views/dashboard/index';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { FocusedDirective } from './directives/focused/index';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    AsideDirective,
    NavDropdownDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    NavDropdownToggleDirective,
    DefaultLayoutComponent,
    FocusedDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    PerfectScrollbarModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CommonModule
  ],

  providers: [
  customHttpProvider,
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,
  PostsService,
  VideoService,
  {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
