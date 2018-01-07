webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alegreya+Sans:100,300,400,900&subset=cyrillic);", ""]);

// module
exports.push([module.i, "* {\n  font-family: 'Alegreya Sans', sans-serif;\n  font-size: 16px;\n}\n\n\n/* Large desktop */\n@media (min-width: 980px) {\n  h2 {\n    font-weight: 900;\n    font-size: 40px;\n    text-align: right;\n    margin-top: 10px;\n  }\n\n  .left-side {\n    float: left;\n    width: 20%;\n  }\n  .right-side {\n    float: left;\n    width: 80%;\n  }\n\n  header {\n  //margin-bottom: 10px;\n  }\n}\n\n\nh2 {\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nsmall {\n  text-align: center;\n  display: block;\n  margin-bottom: 20px;\n}\n\nul {\n  list-style-type: none;\n  width: 300px;\n  margin: 0 auto;\n  padding: 0;\n}\n\nul li {\n  display: block;\n  padding-left: 55px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  position: relative;\n  line-height: 30px;\n  cursor: pointer;\n  background: #f3f3f3;\n  margin-bottom: 2px;\n  z-index: 0;\n  overflow: hidden;\n}\n\nul li:hover:after {\n  display: block;\n  content: '';\n  background: #31953e;\n  height: 12px;\n  width: 81%;\n  position: absolute;\n  z-index: -1;\n  transition: all 0.2s;\n  -webkit-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n  bottom: -9px;\n  right: 0;\n}\n\n.rating {\n  display: block;\n  position: absolute;\n  left: 10px;\n  color: #fff;\n  text-align: center;\n  font-size: 18px;\n  line-height: 36px;\n  top: 7px;\n  width: 36px;\n  height: 36px;\n  font-weight: 600;\n  text-shadow: 0 0 2px #333;\n}\n\n.rating:before {\n  content: \"\\2605\";\n  position: absolute;\n  font-size: 36px;\n  color: #31953e;\n  z-index: -1;\n  left: 0;\n  top:2px;\n  text-shadow: none;\n}\n\n.name {\n  font-size: 24px;\n}\n\nli:nth-of-type(-n+3) .name.started {\n  color:#ff0000\n}\n\nli:nth-of-type(1) .name.started {\n  font-weight: bold;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Rate your favorite dish:</h2>\n  <small>* you can rate unlimited times, but it will be reset after refresh</small>\n</div>\n<ul id=\"dishes\">\n  <li *ngFor=\"let dish of dishes | sortByRating : '-id', let i = index\"\n      (click)=\"increaseRating(dish.id)\">\n    <span class='rating'>{{dish.rating}}</span>\n    <span class=\"name\" [class.started]=\"started && dish.rating >= 1\">{{i + 1}}. {{dish.name}}</span>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock__ = __webpack_require__("../../../../../src/app/mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.dishes = __WEBPACK_IMPORTED_MODULE_1__mock__["a" /* DISHES */];
        this.started = false;
    }
    AppComponent.prototype.increaseRating = function (id) {
        for (var i = 0; i < this.dishes.length; i++) {
            if (id === this.dishes[i].id) {
                this.dishes[i].rating += 1;
            }
        }
        this.started = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sort_pipe__ = __webpack_require__("../../../../../src/app/shared/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_sort_pipe__["a" /* SortByRatingPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISHES; });
var DISHES = [
    { id: 1, rating: 0, name: 'Sea food' },
    { id: 2, rating: 0, name: 'Fried chicken' },
    { id: 3, rating: 0, name: 'Poutine' },
    { id: 4, rating: 0, name: 'Pizza' },
    { id: 5, rating: 0, name: 'Garlic Fingers' },
    { id: 6, rating: 0, name: 'Timbits' },
    { id: 7, rating: 0, name: 'Lobster Roll' },
    { id: 8, rating: 0, name: 'Maple Bacon' },
    { id: 9, rating: 0, name: 'Tortierre' },
    { id: 10, rating: 0, name: 'French fries' },
];


/***/ }),

/***/ "../../../../../src/app/shared/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByRatingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByRatingPipe = (function () {
    function SortByRatingPipe() {
    }
    SortByRatingPipe.prototype.transform = function (array) {
        return array.sort(function (a, b) { return b.rating - a.rating; });
    };
    SortByRatingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Pipe */])({
            name: 'sortByRating',
            pure: false
        })
    ], SortByRatingPipe);
    return SortByRatingPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map