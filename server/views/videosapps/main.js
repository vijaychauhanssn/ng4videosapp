(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n          \r\n            <router-outlet></router-outlet>\r\n<!-- end -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    apiUrl: 'https://videosapps.herokuapp.com'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/index */ "./src/app/helpers/index.ts");
/* harmony import */ var _directives_alert_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/alert/index */ "./src/app/directives/alert/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/index */ "./src/app/guards/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
/* harmony import */ var _view_home_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/home/index */ "./src/app/view/home/index.ts");
/* harmony import */ var _view_login_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/login/index */ "./src/app/view/login/index.ts");
/* harmony import */ var _view_register_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/register/index */ "./src/app/view/register/index.ts");
/* harmony import */ var _components_app_header_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/app-header/index */ "./src/app/components/app-header/index.ts");
/* harmony import */ var _components_app_aside_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/app-aside/index */ "./src/app/components/app-aside/index.ts");
/* harmony import */ var _components_app_footer_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/app-footer/index */ "./src/app/components/app-footer/index.ts");
/* harmony import */ var _components_app_sidebar_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/app-sidebar/index */ "./src/app/components/app-sidebar/index.ts");
/* harmony import */ var _components_app_sidebar_header_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/app-sidebar-header/index */ "./src/app/components/app-sidebar-header/index.ts");
/* harmony import */ var _components_app_sidebar_footer_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/app-sidebar-footer/index */ "./src/app/components/app-sidebar-footer/index.ts");
/* harmony import */ var _components_app_breadcrumbs_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/app-breadcrumbs/index */ "./src/app/components/app-breadcrumbs/index.ts");
/* harmony import */ var _directives_aside_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/aside/index */ "./src/app/directives/aside/index.ts");
/* harmony import */ var _directives_nav_dropdown_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/nav-dropdown/index */ "./src/app/directives/nav-dropdown/index.ts");
/* harmony import */ var _directives_sidebar_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/sidebar/index */ "./src/app/directives/sidebar/index.ts");
/* harmony import */ var _view_dashboard_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./view/dashboard/index */ "./src/app/view/dashboard/index.ts");
/* harmony import */ var _view_posts_index__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./view/posts/index */ "./src/app/view/posts/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to npm install


//end 























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _directives_alert_index__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"],
                _view_home_index__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _view_login_index__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _view_register_index__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _components_app_header_index__WEBPACK_IMPORTED_MODULE_17__["AppHeaderComponent"],
                _components_app_aside_index__WEBPACK_IMPORTED_MODULE_18__["AppAsideComponent"],
                _components_app_footer_index__WEBPACK_IMPORTED_MODULE_19__["AppFooterComponent"],
                _components_app_sidebar_index__WEBPACK_IMPORTED_MODULE_20__["AppSidebarComponent"],
                _components_app_sidebar_header_index__WEBPACK_IMPORTED_MODULE_21__["AppSidebarHeaderComponent"],
                _components_app_sidebar_footer_index__WEBPACK_IMPORTED_MODULE_22__["AppSidebarFooterComponent"],
                _components_app_breadcrumbs_index__WEBPACK_IMPORTED_MODULE_23__["AppBreadcrumbsComponent"],
                _directives_aside_index__WEBPACK_IMPORTED_MODULE_24__["AsideDirective"],
                _directives_nav_dropdown_index__WEBPACK_IMPORTED_MODULE_25__["NavDropdownDirective"],
                _directives_sidebar_index__WEBPACK_IMPORTED_MODULE_26__["SidebarToggleDirective"],
                _directives_sidebar_index__WEBPACK_IMPORTED_MODULE_26__["SidebarMinimizeDirective"],
                _directives_sidebar_index__WEBPACK_IMPORTED_MODULE_26__["SidebarOffCanvasCloseDirective"],
                _directives_sidebar_index__WEBPACK_IMPORTED_MODULE_26__["MobileSidebarToggleDirective"],
                _directives_nav_dropdown_index__WEBPACK_IMPORTED_MODULE_25__["NavDropdownToggleDirective"],
                _view_dashboard_index__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
                _view_posts_index__WEBPACK_IMPORTED_MODULE_28__["PostsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot()
            ],
            providers: [
                _helpers_index__WEBPACK_IMPORTED_MODULE_10__["customHttpProvider"],
                _guards_index__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _services_index__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
                _services_index__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _services_index__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_index__WEBPACK_IMPORTED_MODULE_13__["PostsService"],
                _services_index__WEBPACK_IMPORTED_MODULE_13__["VideoService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_home_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/home/index */ "./src/app/view/home/index.ts");
/* harmony import */ var _view_login_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/login/index */ "./src/app/view/login/index.ts");
/* harmony import */ var _view_register_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/register/index */ "./src/app/view/register/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/index */ "./src/app/guards/index.ts");
/* harmony import */ var _components_app_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app-header/index */ "./src/app/components/app-header/index.ts");
/* harmony import */ var _components_app_aside_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-aside/index */ "./src/app/components/app-aside/index.ts");
/* harmony import */ var _components_app_sidebar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-sidebar/index */ "./src/app/components/app-sidebar/index.ts");
/* harmony import */ var _components_app_sidebar_header_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app-sidebar-header/index */ "./src/app/components/app-sidebar-header/index.ts");
/* harmony import */ var _components_app_sidebar_footer_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/app-sidebar-footer/index */ "./src/app/components/app-sidebar-footer/index.ts");
/* harmony import */ var _view_posts_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/posts/index */ "./src/app/view/posts/index.ts");











var appRoutes = [
    {
        path: '',
        component: _view_home_index__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _view_login_index__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _view_register_index__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: '',
        component: _view_posts_index__WEBPACK_IMPORTED_MODULE_10__["PostsComponent"]
    },
    // otherwise redirect to home
    {
        pathMatch: 'full',
        path: '**', redirectTo: ''
    },
    {
        path: '',
        component: _components_app_aside_index__WEBPACK_IMPORTED_MODULE_6__["AppAsideComponent"],
    },
    {
        path: '',
        component: _components_app_header_index__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
    },
    {
        path: '',
        component: _components_app_sidebar_index__WEBPACK_IMPORTED_MODULE_7__["AppSidebarComponent"],
    },
    {
        path: '',
        component: _components_app_sidebar_header_index__WEBPACK_IMPORTED_MODULE_8__["AppSidebarHeaderComponent"],
    },
    {
        path: '',
        component: _components_app_sidebar_footer_index__WEBPACK_IMPORTED_MODULE_9__["AppSidebarFooterComponent"],
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/app-aside/app-aside.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/app-aside/app-aside.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\r\n  <tabset>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\r\n      <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\r\n        <small><b>Today</b></small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout callout-warning m-0 py-3\">\r\n        <div class=\"avatar float-right\">\r\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Meeting with <strong>Lucas</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-info m-0 py-3\">\r\n        <div class=\"avatar float-right\">\r\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Skype with <strong>Megan</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\r\n        <small><b>Tomorrow</b></small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout callout-danger m-0 py-3\">\r\n        <div>New UI Project - <strong>deadline</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n        <div class=\"avatars-stack mt-2\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-success m-0 py-3\">\r\n        <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-primary m-0 py-3\">\r\n        <div><strong>Team meeting</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n        <div class=\"avatars-stack mt-2\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\r\n      <div class=\"p-3\">\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n      </div>\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\r\n      <div class=\"p-3\">\r\n        <h6>Settings</h6>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-4\">\r\n            <small><b>Option 1</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 2</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 3</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 4</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <h6>System Utilization</h6>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">25GB/256GB</small>\r\n      </div>\r\n    </tab>\r\n  </tabset>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/components/app-aside/app-aside.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/app-aside/app-aside.component.ts ***!
  \*************************************************************/
/*! exports provided: AppAsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAsideComponent", function() { return AppAsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppAsideComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppAsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__(/*! ./app-aside.component.html */ "./src/app/components/app-aside/app-aside.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppAsideComponent);
    return AppAsideComponent;
}());



/***/ }),

/***/ "./src/app/components/app-aside/index.ts":
/*!***********************************************!*\
  !*** ./src/app/components/app-aside/index.ts ***!
  \***********************************************/
/*! exports provided: AppAsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_aside_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-aside.component */ "./src/app/components/app-aside/app-aside.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAsideComponent", function() { return _app_aside_component__WEBPACK_IMPORTED_MODULE_0__["AppAsideComponent"]; });




/***/ }),

/***/ "./src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts ***!
  \*************************************************************************/
/*! exports provided: AppBreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbsComponent", function() { return AppBreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbsComponent = /** @class */ (function () {
    function AppBreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    AppBreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AppBreadcrumbsComponent);
    return AppBreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/components/app-breadcrumbs/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/app-breadcrumbs/index.ts ***!
  \*****************************************************/
/*! exports provided: AppBreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-breadcrumbs.component */ "./src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbsComponent", function() { return _app_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__["AppBreadcrumbsComponent"]; });




/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer\">\r\n  <a href=\"http://localhost:4200/\">Client</a> &copy; 2017.\r\n  <span class=\"float-right\">Powered by <a href=\"http://localhost:4200/\">localhost</a></span>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.ts ***!
  \***************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppFooterComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/components/app-footer/app-footer.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/app-footer/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/app-footer/index.ts ***!
  \************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-footer.component */ "./src/app/components/app-footer/app-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return _app_footer_component__WEBPACK_IMPORTED_MODULE_0__["AppFooterComponent"]; });




/***/ }),

/***/ "./src/app/components/app-header/app-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appSidebarMinimizer>&#9776;</button>\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>You have 5 notifications</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-user-follow text-success\"></i> New user registered\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-user-unfollow text-danger\"></i> User deleted\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-chart text-info\"></i> Sales report is ready\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-basket-loaded text-primary\"></i> New client\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <i class=\"icon-speedometer text-warning\"></i> Server overloaded\r\n        </a>\r\n        <div class=\"dropdown-header text-center\"><strong>Server</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"text-uppercase mb-1\"><small><b>CPU Usage</b></small></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"text-uppercase mb-1\"><small><b>Memory Usage</b></small></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"text-uppercase mb-1\"><small><b>SSD 1 Usage</b></small></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <i class=\"icon-list\"></i><span class=\"badge badge-pill badge-warning\">15</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>You have 5 pending tasks</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">Upgrade NPM &amp; Bower <span class=\"float-right\"><strong>0%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">ReactJS Version <span class=\"float-right\"><strong>25%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">VueJS Version <span class=\"float-right\"><strong>50%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">Add new layouts <span class=\"float-right\"><strong>75%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"small mb-1\">Angular 2 Cli Version <span class=\"float-right\"><strong>100%</strong></span></div>\r\n          <span class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </span>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item text-center\">\r\n          <strong>View all tasks</strong>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item dropdown d-md-down-none\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <i class=\"icon-envelope-letter\"></i><span class=\"badge badge-pill badge-info\">7</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>You have 4 messages</strong></div>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">Just now</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\"><span class=\"fa fa-exclamation text-danger\"></span> Important message</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-warning\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">5 minutes ago</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-danger\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-info\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">John Doe</small>\r\n              <small class=\"text-muted float-right mt-1\">4:03 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\r\n          </div>\r\n        </a>\r\n        <a href=\"#\" class=\"dropdown-item text-center\">\r\n          <strong>View all messages</strong>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\r\n        <span class=\"d-md-down-none\">{{currentUser.firstName}}</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n    <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appAsideMenuToggler>&#9776;</button>\r\n  </ul>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.ts ***!
  \***************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(el, alertService) {
        this.el = el;
        this.alertService = alertService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    //wait for the component to render completely
    AppHeaderComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppHeaderComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        this.alertService.success('Logged Out successful', true);
        localStorage.removeItem('currentUser');
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/components/app-header/app-header.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/app-header/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/app-header/index.ts ***!
  \************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header.component */ "./src/app/components/app-header/app-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return _app_header_component__WEBPACK_IMPORTED_MODULE_0__["AppHeaderComponent"]; });




/***/ }),

/***/ "./src/app/components/app-sidebar-footer/app-sidebar-footer.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/app-sidebar-footer/app-sidebar-footer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppSidebarFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooterComponent", function() { return AppSidebarFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarFooterComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-footer',
            template: __webpack_require__(/*! ./app-sidebar-footer.component.html */ "./src/app/components/app-sidebar-footer/app-sidebar-footer.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarFooterComponent);
    return AppSidebarFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/app-sidebar-footer/index.ts":
/*!********************************************************!*\
  !*** ./src/app/components/app-sidebar-footer/index.ts ***!
  \********************************************************/
/*! exports provided: AppSidebarFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-footer.component */ "./src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooterComponent", function() { return _app_sidebar_footer_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarFooterComponent"]; });




/***/ }),

/***/ "./src/app/components/app-sidebar-header/app-sidebar-header.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/app-sidebar-header/app-sidebar-header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  app-sidebar-header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/app-sidebar-header/app-sidebar-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/app-sidebar-header/app-sidebar-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppSidebarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeaderComponent", function() { return AppSidebarHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarHeaderComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-header',
            template: __webpack_require__(/*! ./app-sidebar-header.component.html */ "./src/app/components/app-sidebar-header/app-sidebar-header.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarHeaderComponent);
    return AppSidebarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/app-sidebar-header/index.ts":
/*!********************************************************!*\
  !*** ./src/app/components/app-sidebar-header/index.ts ***!
  \********************************************************/
/*! exports provided: AppSidebarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-header.component */ "./src/app/components/app-sidebar-header/app-sidebar-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeaderComponent", function() { return _app_sidebar_header_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarHeaderComponent"]; });




/***/ }),

/***/ "./src/app/components/app-sidebar/app-sidebar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/app-sidebar/app-sidebar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <nav class=\"sidebar-nav\">\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard</a>\r\n      </li>\r\n      <li class=\"divider\"></li>\r\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\r\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-puzzle\"></i> Homework</a>\r\n        <ul class=\"nav-dropdown-items\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/modals']\"><i class=\"icon-puzzle\"></i> Modals</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\r\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Time Table</a>\r\n        <ul class=\"nav-dropdown-items\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome<span class=\"badge badge-secondary\">4.7</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Transport </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Exam</a>\r\n      </li>\r\n      <li class=\"divider\"></li>\r\n      \r\n      <li class=\"nav-item nav-dropdown\" appNavDropdown>\r\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Pages</a>\r\n        <ul class=\"nav-dropdown-items\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\r\n          </li>\r\n           <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/view/posts']\"><i class=\"icon-star\"></i> Posts</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <app-sidebar-footer></app-sidebar-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/app-sidebar/app-sidebar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-sidebar/app-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent(el) {
        this.el = el;
    }
    //wait for the component to render completely
    AppSidebarComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement, parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    AppSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./app-sidebar.component.html */ "./src/app/components/app-sidebar/app-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/app-sidebar/index.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app-sidebar/index.ts ***!
  \*************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar.component */ "./src/app/components/app-sidebar/app-sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["AppSidebarComponent"]; });




/***/ }),

/***/ "./src/app/directives/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/directives/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/directives/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
            setTimeout(function () {
                _this.message = false;
            }, 6000);
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/directives/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/directives/alert/index.ts":
/*!*******************************************!*\
  !*** ./src/app/directives/alert/index.ts ***!
  \*******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/directives/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/directives/aside/aside.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/aside/aside.directive.ts ***!
  \*****************************************************/
/*! exports provided: AsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideDirective", function() { return AsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideDirective = /** @class */ (function () {
    function AsideDirective() {
    }
    AsideDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideDirective.prototype, "toggleOpen", null);
    AsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAsideMenuToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], AsideDirective);
    return AsideDirective;
}());



/***/ }),

/***/ "./src/app/directives/aside/index.ts":
/*!*******************************************!*\
  !*** ./src/app/directives/aside/index.ts ***!
  \*******************************************/
/*! exports provided: AsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aside_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside.directive */ "./src/app/directives/aside/aside.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideDirective", function() { return _aside_directive__WEBPACK_IMPORTED_MODULE_0__["AsideDirective"]; });




/***/ }),

/***/ "./src/app/directives/nav-dropdown/index.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/nav-dropdown/index.ts ***!
  \**************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-dropdown.directive */ "./src/app/directives/nav-dropdown/nav-dropdown.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NavDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NavDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NAV_DROPDOWN_DIRECTIVES"]; });




/***/ }),

/***/ "./src/app/directives/nav-dropdown/nav-dropdown.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/directives/nav-dropdown/nav-dropdown.directive.ts ***!
  \*******************************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return NavDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return NavDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "./src/app/directives/sidebar/index.ts":
/*!*********************************************!*\
  !*** ./src/app/directives/sidebar/index.ts ***!
  \*********************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/directives/sidebar/sidebar.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["MobileSidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarOffCanvasCloseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_TOGGLE_DIRECTIVES"]; });




/***/ }),

/***/ "./src/app/directives/sidebar/sidebar.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/sidebar/sidebar.directive.ts ***!
  \*********************************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return SidebarMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return SidebarOffCanvasCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/helpers/custom-http.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/custom-http.ts ***!
  \****************************************/
/*! exports provided: CustomHttp, customHttpFactory, customHttpProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttp", function() { return CustomHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHttpFactory", function() { return customHttpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHttpProvider", function() { return customHttpProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomHttp = /** @class */ (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    CustomHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, _app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, _app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, _app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + url, body, this.addJwt(options)).catch(this.handleError);
    };
    CustomHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, _app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + url, this.addJwt(options)).catch(this.handleError);
    };
    // private helper methods
    CustomHttp.prototype.addJwt = function (options) {
        // ensure request options and headers are not null
        options = options || new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        options.headers = options.headers || new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // add authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return options;
    };
    CustomHttp.prototype.handleError = function (error) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = '/login';
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error._body);
    };
    CustomHttp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["ConnectionBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]])
    ], CustomHttp);
    return CustomHttp;
}(_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));

function customHttpFactory(xhrBackend, requestOptions) {
    return new CustomHttp(xhrBackend, requestOptions);
}
var customHttpProvider = {
    provide: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
    useFactory: customHttpFactory,
    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]]
};


/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: CustomHttp, customHttpFactory, customHttpProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-http */ "./src/app/helpers/custom-http.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomHttp", function() { return _custom_http__WEBPACK_IMPORTED_MODULE_0__["CustomHttp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customHttpFactory", function() { return _custom_http__WEBPACK_IMPORTED_MODULE_0__["customHttpFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customHttpProvider", function() { return _custom_http__WEBPACK_IMPORTED_MODULE_0__["customHttpProvider"]; });




/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AlertService, AuthenticationService, UserService, VideoService, PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.service */ "./src/app/services/video.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]; });

/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts.service */ "./src/app/services/posts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return _posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]; });








/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/users').map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get('/users/' + _id).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/users/register', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/users/' + user._id, user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete('/users/' + _id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.getAll = function () {
        return this.http.get('/videos').map(function (response) { return response.json(); });
    };
    VideoService.prototype.getById = function (_id) {
        return this.http.get('/videos/' + _id).map(function (response) { return response.json(); });
    };
    VideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/view/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/view/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/view/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/view/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/view/dashboard/index.ts":
/*!*****************************************!*\
  !*** ./src/app/view/dashboard/index.ts ***!
  \*****************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/view/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/view/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"app-body\">\r\n   <app-sidebar></app-sidebar>\r\n   <!-- Main content -->\r\n   <main class=\"main\">\r\n      <alert></alert>\r\n      <ol class=\"breadcrumb\">\r\n         <app-breadcrumbs></app-breadcrumbs>\r\n         <!-- Breadcrumb Menu-->\r\n         <li class=\"breadcrumb-menu d-md-down-none\">\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n               <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n               <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n               <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n            </div>\r\n         </li>\r\n      </ol>\r\n      <div class=\"container-fluid\">\r\n         <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-12\">\r\n               <div class=\"card-group mb-0\">\r\n                  <div class=\"card p-4\">\r\n                     <div class=\"card-body\">\r\n                        <h1 class=\"text-muted\">Hi {{currentUser.firstName}}!</h1>\r\n                        <p >You're logged in with  Our Team</p>\r\n                        <h3 class=\"text-muted\">All registered users:</h3>\r\n                        <ul>\r\n                           <li *ngFor=\"let user of users\">\r\n                              {{user.username}} ({{user.firstName}} {{user.lastName}})\r\n                              - <a (click)=\"deleteUser(user._id)\">Delete</a>\r\n                           </li>\r\n                        </ul>\r\n                         <div class=\"animated fadeIn\">\r\n                           <div class=\"row\">\r\n                              <!--div class=\"col-sm-12 col-md-12 col-lg-6\"  *ngFor=\"let v of vs\">\r\n                                 <div class=\"card\">\r\n                                    <div class=\"card-header\">\r\n                                       Video\r\n                                    </div>\r\n                                    <div class=\"card-body\">\r\n                                       <video src=\"assets/videos/{{v.mp4}}\" type=\"video/mp4\"></video>\r\n                                    </div>\r\n                                 </div>\r\n                              </div-->\r\n                              <!--/.col-->\r\n                           </div>\r\n                            <!--/.row-->   \r\n                        </div>\r\n                        <!--/.animated--> \r\n                        <div class=\"animated fadeIn\">\r\n                           <div class=\"row\">\r\n                              <div class=\"col-sm-12 col-md-12 col-lg-6\"  *ngFor=\"let video of videos\">\r\n                                 <div class=\"card\">\r\n                                    <div class=\"card-header\">\r\n                                       <h2>{{video.name}}</h2>\r\n                                    </div>\r\n                                    <div class=\"card-body\">\r\n                                       <p>{{video.description}}</p>\r\n                                    </div>\r\n                                    <div class=\"card-body\">\r\n                                        <video (click)=\"toggleVideo()\"    preload=\"auto\" controls #videoPlayer>\r\n                                          <source src=\"assets/{{video.url}}\" type=\"video/mp4\">\r\n                                       </video>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                              <!--/.col-->\r\n                           </div>\r\n                            <!--/.row-->   \r\n                        </div>\r\n                        <!--/.animated-->    \r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <router-outlet></router-outlet>\r\n      </div>\r\n      <!-- /.conainer-fluid -->\r\n   </main>\r\n   <app-aside></app-aside>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/view/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    //vs : Array<{mp4: string, image:string}>;
    function HomeComponent(userService, videoService, nativeElement, alertService) {
        this.userService = userService;
        this.videoService = videoService;
        this.nativeElement = nativeElement;
        this.alertService = alertService;
        this.users = [];
        this.videos = [];
        this.vs = [
            {
                "mp4": "video-1.mp4",
                "image": "logo.png"
            },
            {
                "mp4": "video-2.mp4",
                "image": "logo.png"
            },
            {
                "mp4": "video-3.mp4",
                "image": "logo.png"
            },
            {
                "mp4": "video-4.mp4",
                "image": "logo.png"
            },
            {
                "mp4": "video-5.mp4",
                "image": "logo.png"
            },
            {
                "mp4": "video-6.mp4",
                "image": "logo.png"
            }
        ];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.videos = JSON.parse(localStorage.getItem('videos'));
    }
    HomeComponent.prototype.toggleVideo = function (event) {
        this.videoplayer.nativeElement.pause();
        if (this.video !== 1) {
            alert("Not Play Video");
        }
        else {
            alert("Play Video");
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.loadAllVideos();
    };
    HomeComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent.prototype.loadAllVideos = function () {
        var _this = this;
        this.videoService.getAll().subscribe(function (videos) { _this.videos = videos; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoPlayer'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "videoplayer", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/view/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_index__WEBPACK_IMPORTED_MODULE_1__["VideoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/home/index.ts":
/*!************************************!*\
  !*** ./src/app/view/home/index.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/view/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/view/login/index.ts":
/*!*************************************!*\
  !*** ./src/app/view/login/index.ts ***!
  \*************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/view/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/view/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/view/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-group mb-0\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-body\">\r\n              <h1 class=\"text-muted\">Login</h1>\r\n                <alert></alert>\r\n             <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                     <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"  placeholder=\"Username\" required />\r\n                </div>\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"alert alert-danger alert-dismissable fade show\">Username is required</div>\r\n                <div class=\"form-group input-group mb-4\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" placeholder=\"Password\" required />\r\n                </div>\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"alert alert-danger alert-dismissable fade show\">Password is required</div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                </div>\r\n            </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n            <div class=\"card-body text-center\">\r\n              <div>\r\n                <h2>Sign up</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                <a class=\"btn btn-block btn-success\"  [routerLink]=\"['/register']\"><i class=\"icon-star\"></i> Register Now!</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/view/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/view/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.alertService.success('Login successful', true);
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/view/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/view/posts/index.ts":
/*!*************************************!*\
  !*** ./src/app/view/posts/index.ts ***!
  \*************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component */ "./src/app/view/posts/posts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return _posts_component__WEBPACK_IMPORTED_MODULE_0__["PostsComponent"]; });




/***/ }),

/***/ "./src/app/view/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/view/posts/posts.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/view/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  posts works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/view/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/view/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/view/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/view/register/index.ts":
/*!****************************************!*\
  !*** ./src/app/view/register/index.ts ***!
  \****************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/view/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/view/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/view/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card mx-4\">\r\n          <div class=\"card-body p-4\">\r\n            <h1>Register</h1>\r\n            <p class=\"text-muted\">Create your account</p>\r\n             <alert></alert>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n\t\t        <div class=\"form-group input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n\t\t            <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n\t\t            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" placeholder=\"First Name\" required />\r\n\t\t        </div>\r\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"alert alert-danger alert-dismissable fade show\">First Name is required</div>\r\n\t\t        <div class=\"form-group input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\r\n\t\t             <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n\t\t            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" placeholder=\"Last Name\" required />\r\n\t\t        </div>\r\n\t\t       <div *ngIf=\"f.submitted && !lastName.valid\" class=\"alert alert-danger alert-dismissable fade show\">Last Name is required</div>\r\n            <div class=\"form-group input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n\t\t           <span class=\"input-group-addon\">@</span>\r\n\t\t            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" placeholder=\"Username\" required />\r\n\t\t        </div>\r\n\t\t    <div *ngIf=\"f.submitted && !username.valid\" class=\"alert alert-danger alert-dismissable fade show\">Username is required</div>\r\n          <div class=\"form-group row\">\r\n              <div class=\"col-md-12\">\r\n                <select id=\"select\" name=\"role\" class=\"form-control\">\r\n                  <option value=\"\">Please select</option>\r\n                  <option value=\"admin\">Admin</option>\r\n                  <option value=\"teacher\">Teacher</option>\r\n                  <option value=\"student\">Student</option>\r\n                </select>\r\n              </div>\r\n              </div>\r\n\t\t        <div class=\"form-group input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n\t\t           <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n\t\t            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" placeholder=\"Password\" required />\r\n\t\t        </div>\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"alert alert-danger alert-dismissable fade show\">Password is required</div>\r\n\t          <div class=\"form-group\">\r\n\t            <button [disabled]=\"loading\"  class=\"btn btn-block btn-success\">Create Account</button>\r\n\t            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n\t        \t</div>\r\n\t\t    </form>\r\n            <a class=\"btn btn-block btn-primary\"  [routerLink]=\"['/login']\">Login</a>\r\n          </div>\r\n          <div class=\"card-footer p-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.alertService.success('Registration successful', true);
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/view/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Prateek\videosapp\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map