(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module-ngfactory"],{

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
var index_1 = __webpack_require__(/*! ../../guards/index */ "./src/app/guards/index.ts");
var ɵ0 = {
    title: 'Dashboard'
};
exports.ɵ0 = ɵ0;
var routes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [index_1.AuthGuard],
        data: ɵ0
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;


/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var i2 = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
var i3 = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var i4 = __webpack_require__(/*! ../../services/video.service */ "./src/app/services/video.service.ts");
var i5 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var i6 = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
var styles_DashboardComponent = [];
var RenderType_DashboardComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_DashboardComponent, data: {} });
exports.RenderType_DashboardComponent = RenderType_DashboardComponent;
function View_DashboardComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " (", " ", ") - "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "a", [["class", "d-none"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.deleteUser(_v.context.$implicit._id);
        var pd_0 = (_co.login() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Delete"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.username; var currVal_1 = _v.context.$implicit.firstName; var currVal_2 = _v.context.$implicit.lastName; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }); }
function View_DashboardComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "div", [["class", "col-sm-12 col-md-12 col-lg-6"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵeld(5, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(7, null, ["", ""])), (_l()(), i0.ɵeld(8, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, [[1, 0], ["videoPlayer", 1]], null, 1, "video", [["controls", ""], ["preload", "auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleVideo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 0, "source", [["type", "video/mp4"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.description; _ck(_v, 7, 0, currVal_1); var currVal_2 = i0.ɵinlineInterpolate(1, "assets/", _v.context.$implicit.url, ""); _ck(_v, 10, 0, currVal_2); }); }
function View_DashboardComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { videoplayer: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 52, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 31, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 7, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 6, "div", [["class", "card text-white bg-primary"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 2, "div", [["class", "text-value text-center\n                      "]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 0, "i", [["class", "icon-people"]], null, null, null, null, null)), (_l()(), i0.ɵted(9, null, [" ", ""])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Total Users"])), (_l()(), i0.ɵeld(12, 0, null, null, 7, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 6, "div", [["class", "card text-white bg-info"]], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(15, 0, null, null, 2, "div", [["class", "text-value text-center"]], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 0, "i", [["class", "icon-user"]], null, null, null, null, null)), (_l()(), i0.ɵted(17, null, [" ", ""])), (_l()(), i0.ɵeld(18, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Total Videos"])), (_l()(), i0.ɵeld(20, 0, null, null, 6, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i0.ɵeld(21, 0, null, null, 5, "div", [["class", "card text-white bg-warning"]], null, null, null, null, null)), (_l()(), i0.ɵeld(22, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(23, 0, null, null, 1, "div", [["class", "text-value text-center"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["1"])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Members online"])), (_l()(), i0.ɵeld(27, 0, null, null, 6, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i0.ɵeld(28, 0, null, null, 5, "div", [["class", "card text-white bg-danger"]], null, null, null, null, null)), (_l()(), i0.ɵeld(29, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(30, 0, null, null, 1, "div", [["class", "text-value text-center"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["3"])), (_l()(), i0.ɵeld(32, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["User online"])), (_l()(), i0.ɵeld(34, 0, null, null, 19, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), i0.ɵeld(35, 0, null, null, 18, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i0.ɵeld(36, 0, null, null, 17, "div", [["class", "card-group mb-0"]], null, null, null, null, null)), (_l()(), i0.ɵeld(37, 0, null, null, 16, "div", [["class", "card p-4"]], null, null, null, null, null)), (_l()(), i0.ɵeld(38, 0, null, null, 15, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i0.ɵeld(39, 0, null, null, 1, "h1", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), i0.ɵted(40, null, ["Hi! ", ""])), (_l()(), i0.ɵeld(41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["You're logged in with Our Team"])), (_l()(), i0.ɵeld(43, 0, null, null, 1, "h3", [["class", "text-muted d-none"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["All registered users:"])), (_l()(), i0.ɵeld(45, 0, null, null, 2, "ul", [["class", "d-none"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DashboardComponent_1)), i0.ɵdid(47, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(48, 0, null, null, 1, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i0.ɵeld(49, 0, null, null, 0, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(50, 0, null, null, 3, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i0.ɵeld(51, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DashboardComponent_2)), i0.ɵdid(53, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.users; _ck(_v, 47, 0, currVal_3); var currVal_4 = _co.videos; _ck(_v, 53, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.users.length; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.videos.length; _ck(_v, 17, 0, currVal_1); var currVal_2 = _co.currentUser.firstName; _ck(_v, 40, 0, currVal_2); }); }
exports.View_DashboardComponent_0 = View_DashboardComponent_0;
function View_DashboardComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), i0.ɵdid(1, 114688, null, 0, i2.DashboardComponent, [i3.UserService, i4.VideoService, i0.ElementRef, i5.Router, i6.AlertService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_DashboardComponent_Host_0 = View_DashboardComponent_Host_0;
var DashboardComponentNgFactory = i0.ɵccf("ng-component", i2.DashboardComponent, View_DashboardComponent_Host_0, {}, {}, []);
exports.DashboardComponentNgFactory = DashboardComponentNgFactory;


/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var index_1 = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var index_2 = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var index_3 = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var DashboardComponent = /** @class */ (function () {
    //vs : Array<{mp4: string, image:string}>;
    function DashboardComponent(userService, videoService, nativeElement, router, alertService) {
        this.userService = userService;
        this.videoService = videoService;
        this.nativeElement = nativeElement;
        this.router = router;
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
    DashboardComponent.prototype.toggleVideo = function (event) {
        this.videoplayer.nativeElement.pause();
        if (this.video !== 1) {
            alert("Not Play Video");
        }
        else {
            alert("Play Video");
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.loadAllVideos();
    };
    DashboardComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () { _this.loadAllUsers(); });
    };
    DashboardComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    DashboardComponent.prototype.loadAllVideos = function () {
        var _this = this;
        this.videoService.getAll().subscribe(function (videos) { _this.videos = videos; });
    };
    DashboardComponent.prototype.login = function () {
        this.router.navigate(['./login']);
    };
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var i1 = __webpack_require__(/*! ./dashboard.module */ "./src/app/views/dashboard/dashboard.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./dashboard.component.ngfactory */ "./src/app/views/dashboard/dashboard.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var i5 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var i6 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var i7 = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
var i8 = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
var i9 = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var DashboardModuleNgFactory = i0.ɵcmf(i1.DashboardModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.DashboardComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.ɵangular_packages_forms_forms_i, i5.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.ɵangular_packages_forms_forms_bb, i5.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i5.FormsModule, i5.FormsModule, []), i0.ɵmpd(1073742336, i6.RouterModule, i6.RouterModule, [[2, i6.ɵangular_packages_router_router_a], [2, i6.Router]]), i0.ɵmpd(1073742336, i7.DashboardRoutingModule, i7.DashboardRoutingModule, []), i0.ɵmpd(1073742336, i1.DashboardModule, i1.DashboardModule, []), i0.ɵmpd(1024, i6.ROUTES, function () { return [[{ path: "", component: i8.DashboardComponent, canActivate: [i9.AuthGuard], data: i7.ɵ0 }]]; }, [])]); });
exports.DashboardModuleNgFactory = DashboardModuleNgFactory;


/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module-ngfactory.js.map