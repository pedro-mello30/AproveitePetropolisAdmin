(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estabelecimentos-estabelecimentos-lista-estabelecimentos-lista-module"],{

/***/ "37aK":
/*!******************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-lista/estabelecimentos-lista.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EstabelecimentosListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosListaPageModule", function() { return EstabelecimentosListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estabelecimentos_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estabelecimentos-lista-routing.module */ "i6xC");
/* harmony import */ var _estabelecimentos_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estabelecimentos-lista.page */ "GEh3");







let EstabelecimentosListaPageModule = class EstabelecimentosListaPageModule {
};
EstabelecimentosListaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estabelecimentos_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentosListaPageRoutingModule"]
        ],
        declarations: [_estabelecimentos_lista_page__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentosListaPage"]]
    })
], EstabelecimentosListaPageModule);



/***/ }),

/***/ "GEh3":
/*!****************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-lista/estabelecimentos-lista.page.ts ***!
  \****************************************************************************************/
/*! exports provided: EstabelecimentosListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosListaPage", function() { return EstabelecimentosListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estabelecimentos_lista_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estabelecimentos-lista.page.html */ "iTzk");
/* harmony import */ var _estabelecimentos_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estabelecimentos-lista.page.scss */ "OCN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EstabelecimentosListaPage = class EstabelecimentosListaPage {
    constructor() {
        this.estabelecimentos = [{ nome: 'estabelecimentos' }];
    }
    ngOnInit() {
    }
    remove() { }
};
EstabelecimentosListaPage.ctorParameters = () => [];
EstabelecimentosListaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estabelecimentos-lista',
        template: _raw_loader_estabelecimentos_lista_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estabelecimentos_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstabelecimentosListaPage);



/***/ }),

/***/ "OCN3":
/*!******************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-lista/estabelecimentos-lista.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhYmVsZWNpbWVudG9zLWxpc3RhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "i6xC":
/*!**************************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-lista/estabelecimentos-lista-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: EstabelecimentosListaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosListaPageRoutingModule", function() { return EstabelecimentosListaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimentos_lista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estabelecimentos-lista.page */ "GEh3");




const routes = [
    {
        path: '',
        component: _estabelecimentos_lista_page__WEBPACK_IMPORTED_MODULE_3__["EstabelecimentosListaPage"]
    }
];
let EstabelecimentosListaPageRoutingModule = class EstabelecimentosListaPageRoutingModule {
};
EstabelecimentosListaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstabelecimentosListaPageRoutingModule);



/***/ }),

/***/ "iTzk":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimentos/estabelecimentos-lista/estabelecimentos-lista.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Estabelecimento</ion-title>\n    <ion-button slot=\"end\" class=\"ion-margin-end\" [routerLink]=\"['/estabelecimentos/novo']\">Novo</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"estabelecimentos.length == 0\" class=\"alert alert-warning\" role=\"alert\">\n          Nenhuma estabelecimento cadastrada.\n        </div>\n        <div *ngIf=\"estabelecimentos.length > 0\">\n          <ion-item *ngFor=\"let estabelecimento of estabelecimentos\">\n            <ion-label>{{estabelecimento.nome}}</ion-label>\n            <ion-button slot=\"end\" color=\"primary\" [routerLink]=\"['/estabelecimentos/editar/', estabelecimento._id]\">\n              <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n              Editar\n            </ion-button>\n            <ion-button slot=\"end\" color=\"danger\" (click)=\"remove()\">\n              <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n              Excluir\n            </ion-button>\n          </ion-item>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=estabelecimentos-estabelecimentos-lista-estabelecimentos-lista-module.js.map