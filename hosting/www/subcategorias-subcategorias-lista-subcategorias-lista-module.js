(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subcategorias-subcategorias-lista-subcategorias-lista-module"],{

/***/ "Aa0F":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcategorias/subcategorias-lista/subcategorias-lista.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Subcategorias</ion-title>\n    <ion-button slot=\"end\" class=\"ion-margin-end\" [routerLink]=\"['/subcategorias/novo']\">Novo</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngFor=\"let subcategoria of subcategorias | async\">\n          <ion-thumbnail slot=\"start\">\n            <img *ngIf=\"subcategoria.imagem\" src=\"{{subcategoria.imagem}}\">\n            <img *ngIf=\"!subcategoria.imagem\" src=\"assets/no_image.jpg\">\n          </ion-thumbnail>\n          <ion-label>{{subcategoria.categoriaNome}} - {{subcategoria.nome}}</ion-label>\n          <ion-button slot=\"end\" color=\"primary\" [routerLink]=\"['/subcategorias/editar/', subcategoria.key]\">\n            <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n            Editar\n          </ion-button>\n          <ion-button slot=\"end\" color=\"danger\" (click)=\"remove(subcategoria.key, subcategoria.filePath)\">\n            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n            Excluir\n          </ion-button>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "HrJg":
/*!*********************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-lista/subcategorias-lista.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SubcategoriasListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasListaPageModule", function() { return SubcategoriasListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subcategorias_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategorias-lista-routing.module */ "ZdI0");
/* harmony import */ var _subcategorias_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategorias-lista.page */ "uLka");







let SubcategoriasListaPageModule = class SubcategoriasListaPageModule {
};
SubcategoriasListaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subcategorias_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubcategoriasListaPageRoutingModule"]
        ],
        declarations: [_subcategorias_lista_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoriasListaPage"]]
    })
], SubcategoriasListaPageModule);



/***/ }),

/***/ "JmI5":
/*!*********************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-lista/subcategorias-lista.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjYXRlZ29yaWFzLWxpc3RhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ZdI0":
/*!*****************************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-lista/subcategorias-lista-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SubcategoriasListaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasListaPageRoutingModule", function() { return SubcategoriasListaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subcategorias_lista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategorias-lista.page */ "uLka");




const routes = [
    {
        path: '',
        component: _subcategorias_lista_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoriasListaPage"]
    }
];
let SubcategoriasListaPageRoutingModule = class SubcategoriasListaPageRoutingModule {
};
SubcategoriasListaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubcategoriasListaPageRoutingModule);



/***/ }),

/***/ "uLka":
/*!*******************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-lista/subcategorias-lista.page.ts ***!
  \*******************************************************************************/
/*! exports provided: SubcategoriasListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasListaPage", function() { return SubcategoriasListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subcategorias_lista_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subcategorias-lista.page.html */ "Aa0F");
/* harmony import */ var _subcategorias_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategorias-lista.page.scss */ "JmI5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/subcategorias.service */ "aw4o");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");






let SubcategoriasListaPage = class SubcategoriasListaPage {
    constructor(subcategoriaService, toast) {
        this.subcategoriaService = subcategoriaService;
        this.toast = toast;
    }
    ngOnInit() {
        this.subcategorias = this.subcategoriaService.getAll();
    }
    remove(key, filePath) {
        this.subcategoriaService.remove(key, filePath);
        this.toast.showSuccess('Subcategoria removida');
    }
};
SubcategoriasListaPage.ctorParameters = () => [
    { type: _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_4__["SubcategoriasService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
SubcategoriasListaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subcategorias-lista',
        template: _raw_loader_subcategorias_lista_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subcategorias_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubcategoriasListaPage);



/***/ })

}]);
//# sourceMappingURL=subcategorias-subcategorias-lista-subcategorias-lista-module.js.map