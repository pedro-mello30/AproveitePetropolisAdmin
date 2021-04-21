(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adicionar-adicionar-module"],{

/***/ "7MDy":
/*!************************************************************************!*\
  !*** ./src/app/estabelecimentos/adicionar/adicionar-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AdicionarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPageRoutingModule", function() { return AdicionarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adicionar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adicionar.page */ "fqjT");




const routes = [
    {
        path: '',
        component: _adicionar_page__WEBPACK_IMPORTED_MODULE_3__["AdicionarPage"]
    }
];
let AdicionarPageRoutingModule = class AdicionarPageRoutingModule {
};
AdicionarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdicionarPageRoutingModule);



/***/ }),

/***/ "9IAh":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimentos/adicionar/adicionar.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>adicionar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "V1Q6":
/*!****************************************************************!*\
  !*** ./src/app/estabelecimentos/adicionar/adicionar.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGljaW9uYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "fqjT":
/*!**************************************************************!*\
  !*** ./src/app/estabelecimentos/adicionar/adicionar.page.ts ***!
  \**************************************************************/
/*! exports provided: AdicionarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPage", function() { return AdicionarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adicionar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adicionar.page.html */ "9IAh");
/* harmony import */ var _adicionar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adicionar.page.scss */ "V1Q6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdicionarPage = class AdicionarPage {
    constructor() { }
    ngOnInit() {
    }
};
AdicionarPage.ctorParameters = () => [];
AdicionarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adicionar',
        template: _raw_loader_adicionar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adicionar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdicionarPage);



/***/ }),

/***/ "sblA":
/*!****************************************************************!*\
  !*** ./src/app/estabelecimentos/adicionar/adicionar.module.ts ***!
  \****************************************************************/
/*! exports provided: AdicionarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPageModule", function() { return AdicionarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adicionar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adicionar-routing.module */ "7MDy");
/* harmony import */ var _adicionar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adicionar.page */ "fqjT");







let AdicionarPageModule = class AdicionarPageModule {
};
AdicionarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adicionar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdicionarPageRoutingModule"]
        ],
        declarations: [_adicionar_page__WEBPACK_IMPORTED_MODULE_6__["AdicionarPage"]]
    })
], AdicionarPageModule);



/***/ })

}]);
//# sourceMappingURL=adicionar-adicionar-module.js.map