(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-lista-categorias-lista-module"],{

/***/ "7d/y":
/*!************************************************************************!*\
  !*** ./src/app/categorias/categorias-lista/categorias-lista.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLWxpc3RhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "IgQt":
/*!**********************************************************************!*\
  !*** ./src/app/categorias/categorias-lista/categorias-lista.page.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriasListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasListaPage", function() { return CategoriasListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_lista_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias-lista.page.html */ "M66G");
/* harmony import */ var _categorias_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias-lista.page.scss */ "7d/y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/categorias.service */ "xMlV");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");






let CategoriasListaPage = class CategoriasListaPage {
    constructor(categoriasService, toast) {
        this.categoriasService = categoriasService;
        this.toast = toast;
    }
    ngOnInit() {
        this.categorias = this.categoriasService.getAll();
    }
    remove(key, filePath) {
        this.categoriasService.remove(key, filePath);
        this.toast.showSuccess('Categoria removida');
    }
};
CategoriasListaPage.ctorParameters = () => [
    { type: _shared_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
CategoriasListaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias-lista',
        template: _raw_loader_categorias_lista_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasListaPage);



/***/ }),

/***/ "M66G":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias-lista/categorias-lista.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Categorias</ion-title>\n    <ion-button slot=\"end\" class=\"ion-margin-end\" [routerLink]=\"['/categorias/novo']\">Novo</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngFor=\"let categoria of categorias | async\">\n          <ion-thumbnail slot=\"start\">\n            <img *ngIf=\"categoria.imagem\" src=\"{{categoria.imagem}}\">\n            <img *ngIf=\"!categoria.imagem\" src=\"assets/no_image.jpg\">\n          </ion-thumbnail>\n          <ion-label>{{categoria.nome}}</ion-label>\n          <ion-button slot=\"end\" color=\"primary\" [routerLink]=\"['/categorias/editar/', categoria.key]\">\n            <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n            Editar\n          </ion-button>\n          <ion-button slot=\"end\" color=\"danger\" (click)=\"remove(categoria.key, categoria.filePath)\">\n            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n            Excluir\n          </ion-button>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "iJ+R":
/*!************************************************************************!*\
  !*** ./src/app/categorias/categorias-lista/categorias-lista.module.ts ***!
  \************************************************************************/
/*! exports provided: CategoriasListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasListaPageModule", function() { return CategoriasListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categorias_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-lista-routing.module */ "yui3");
/* harmony import */ var _categorias_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias-lista.page */ "IgQt");







let CategoriasListaPageModule = class CategoriasListaPageModule {
};
CategoriasListaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categorias_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasListaPageRoutingModule"]
        ],
        declarations: [_categorias_lista_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasListaPage"]]
    })
], CategoriasListaPageModule);



/***/ }),

/***/ "yui3":
/*!********************************************************************************!*\
  !*** ./src/app/categorias/categorias-lista/categorias-lista-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CategoriasListaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasListaPageRoutingModule", function() { return CategoriasListaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorias_lista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias-lista.page */ "IgQt");




const routes = [
    {
        path: '',
        component: _categorias_lista_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasListaPage"]
    }
];
let CategoriasListaPageRoutingModule = class CategoriasListaPageRoutingModule {
};
CategoriasListaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasListaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=categorias-categorias-lista-categorias-lista-module.js.map