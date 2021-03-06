(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module-ngfactory"],{

/***/ "./src/app/views/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home-routing.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var home_component_1 = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
var index_1 = __webpack_require__(/*! ../../guards/index */ "./src/app/guards/index.ts");
var ɵ0 = {
    title: 'Home'
};
exports.ɵ0 = ɵ0;
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [index_1.AuthGuard],
        data: ɵ0
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ "./src/app/views/home/home.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/views/home/home.component.css.shim.ngstyle.js ***!
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
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/views/home/home.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/views/home/home.component.ngfactory.js ***!
  \********************************************************/
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
var i0 = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/views/home/home.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var i3 = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
var i4 = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var i5 = __webpack_require__(/*! ../../services/video.service */ "./src/app/services/video.service.ts");
var i6 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var i7 = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "col-sm-12 col-md-12 col-lg-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵeld(8, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, [[1, 0], ["videoPlayer", 1]], null, 1, "video", [["controls", ""], ["preload", "auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleVideo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "source", [["type", "video/mp4"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.description; _ck(_v, 7, 0, currVal_1); var currVal_2 = i1.ɵinlineInterpolate(1, "assets/", _v.context.$implicit.url, ""); _ck(_v, 10, 0, currVal_2); }); }
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(671088640, 1, { videoplayer: 0 }), (_l()(), i1.ɵeld(1, 0, null, null, 60, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 31, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 7, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 6, "div", [["class", "card text-white bg-primary"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "text-value text-center\n                      "]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "i", [["class", "icon-people"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", ""])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Total Users"])), (_l()(), i1.ɵeld(12, 0, null, null, 7, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 6, "div", [["class", "card text-white bg-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "div", [["class", "text-value text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "i", [["class", "icon-film"]], null, null, null, null, null)), (_l()(), i1.ɵted(17, null, [" ", ""])), (_l()(), i1.ɵeld(18, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Total Videos"])), (_l()(), i1.ɵeld(20, 0, null, null, 6, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 5, "div", [["class", "card text-white bg-warning"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "div", [["class", "text-value text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1"])), (_l()(), i1.ɵeld(25, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Members online"])), (_l()(), i1.ɵeld(27, 0, null, null, 6, "div", [["class", "col-sm-6 col-lg-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 5, "div", [["class", "card text-white bg-danger"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 4, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "div", [["class", "text-value text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["3"])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["User online"])), (_l()(), i1.ɵeld(34, 0, null, null, 27, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 26, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 25, "div", [["class", "card-group mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 24, "div", [["class", "card p-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 23, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 15, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 6, "div", [["class", "col-sm-6 col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 1, "h1", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), i1.ɵted(45, null, ["Hi ", "!"])), (_l()(), i1.ɵeld(46, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])), (_l()(), i1.ɵeld(48, 0, null, null, 6, "div", [["class", "col-sm-6 col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 2, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "h1", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), i1.ɵted(52, null, ["Hi ", "!"])), (_l()(), i1.ɵeld(53, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "])), (_l()(), i1.ɵeld(55, 0, null, null, 1, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 0, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 4, "div", [["class", "animated fadeIn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_HomeComponent_1)), i1.ɵdid(60, 278528, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i1.ɵpid(0, i2.SlicePipe, [])], function (_ck, _v) { var _co = _v.component; var currVal_4 = i1.ɵunv(_v, 60, 0, i1.ɵnov(_v, 61).transform(_co.videos, 1, 11)); _ck(_v, 60, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.users.length; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.videos.length; _ck(_v, 17, 0, currVal_1); var currVal_2 = _co.currentUser.firstName; _ck(_v, 45, 0, currVal_2); var currVal_3 = _co.currentUser.firstName; _ck(_v, 52, 0, currVal_3); }); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 114688, null, 0, i3.HomeComponent, [i4.UserService, i5.VideoService, i1.ElementRef, i6.Router, i7.AlertService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("app-home", i3.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var index_1 = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var index_2 = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var index_3 = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var HomeComponent = /** @class */ (function () {
    //vs : Array<{mp4: string, image:string}>;
    function HomeComponent(userService, videoService, nativeElement, router, alertService) {
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
    HomeComponent.prototype.login = function () {
        this.router.navigate(['./login']);
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/views/home/home.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/views/home/home.module.ngfactory.js ***!
  \*****************************************************/
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
var i1 = __webpack_require__(/*! ./home.module */ "./src/app/views/home/home.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./home.component.ngfactory */ "./src/app/views/home/home.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var i5 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var i6 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var i7 = __webpack_require__(/*! ./home-routing.module */ "./src/app/views/home/home-routing.module.ts");
var i8 = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
var i9 = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.HomeComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.ɵangular_packages_forms_forms_i, i5.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.ɵangular_packages_forms_forms_bb, i5.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i5.FormsModule, i5.FormsModule, []), i0.ɵmpd(1073742336, i6.RouterModule, i6.RouterModule, [[2, i6.ɵangular_packages_router_router_a], [2, i6.Router]]), i0.ɵmpd(1073742336, i7.HomeRoutingModule, i7.HomeRoutingModule, []), i0.ɵmpd(1073742336, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i6.ROUTES, function () { return [[{ path: "", component: i8.HomeComponent, canActivate: [i9.AuthGuard], data: i7.ɵ0 }]]; }, [])]); });
exports.HomeModuleNgFactory = HomeModuleNgFactory;


/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ })

}]);
//# sourceMappingURL=views-home-home-module-ngfactory.js.map