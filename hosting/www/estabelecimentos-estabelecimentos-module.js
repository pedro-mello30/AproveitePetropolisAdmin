(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estabelecimentos-estabelecimentos-module"],{

/***/ "O4Qv":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimentos/estabelecimentos.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Estabelecimentos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <!-- Sliding item with icon start options on end side -->\n        <ion-item-sliding>\n          <ion-item>\n            <ion-label>\n              Estabelecimento\n            </ion-label>\n          </ion-item>\n          <ion-item-options>\n            <ion-item-option color=\"primary\">\n              <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n              Editar\n            </ion-item-option>\n            <ion-item-option color=\"danger\">\n              <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n              Excluir\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n\n\n\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "ep0g":
/*!*************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos.module.ts ***!
  \*************************************************************/
/*! exports provided: EstabelecimentosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosPageModule", function() { return EstabelecimentosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estabelecimentos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estabelecimentos-routing.module */ "xXUU");
/* harmony import */ var _estabelecimentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estabelecimentos.page */ "hxeG");







let EstabelecimentosPageModule = class EstabelecimentosPageModule {
};
EstabelecimentosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estabelecimentos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentosPageRoutingModule"]
        ],
        declarations: [_estabelecimentos_page__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentosPage"]]
    })
], EstabelecimentosPageModule);



/***/ }),

/***/ "hxeG":
/*!***********************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos.page.ts ***!
  \***********************************************************/
/*! exports provided: EstabelecimentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosPage", function() { return EstabelecimentosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estabelecimentos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estabelecimentos.page.html */ "O4Qv");
/* harmony import */ var _estabelecimentos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estabelecimentos.page.scss */ "pRqs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EstabelecimentosPage = class EstabelecimentosPage {
    constructor() { }
    ngOnInit() {
    }
};
EstabelecimentosPage.ctorParameters = () => [];
EstabelecimentosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estabelecimentos',
        template: _raw_loader_estabelecimentos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estabelecimentos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstabelecimentosPage);



/***/ }),

/***/ "pRqs":
/*!*************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhYmVsZWNpbWVudG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "xXUU":
/*!*********************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EstabelecimentosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosPageRoutingModule", function() { return EstabelecimentosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estabelecimentos.page */ "hxeG");




const routes = [
    {
        path: '',
        component: _estabelecimentos_page__WEBPACK_IMPORTED_MODULE_3__["EstabelecimentosPage"]
    },
    {
        path: 'adicionar',
        loadChildren: () => __webpack_require__.e(/*! import() | adicionar-adicionar-module */ "adicionar-adicionar-module").then(__webpack_require__.bind(null, /*! ./adicionar/adicionar.module */ "sblA")).then(m => m.AdicionarPageModule)
    }
];
let EstabelecimentosPageRoutingModule = class EstabelecimentosPageRoutingModule {
};
EstabelecimentosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstabelecimentosPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=estabelecimentos-estabelecimentos-module.js.map