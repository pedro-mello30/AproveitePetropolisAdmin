(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estabelecimentos-estabelecimentos-form-estabelecimentos-form-module"],{

/***/ "7U4o":
/*!**************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-form/estabelecimentos-form.page.ts ***!
  \**************************************************************************************/
/*! exports provided: EstabelecimentosFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosFormPage", function() { return EstabelecimentosFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estabelecimentos_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estabelecimentos-form.page.html */ "7qSw");
/* harmony import */ var _estabelecimentos_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estabelecimentos-form.page.scss */ "l+qM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");






let EstabelecimentosFormPage = class EstabelecimentosFormPage {
    constructor(formBuilder, usuarioAuthService) {
        this.formBuilder = formBuilder;
        this.usuarioAuthService = usuarioAuthService;
        this.title = 'Novo Estabelecimento';
    }
    ngOnInit() {
        this.criarFormulario();
    }
    get nome() { return this.formEstabelecimento.get('nome'); }
    criarFormulario() {
        this.formEstabelecimento = this.formBuilder.group({
            nome: [''],
        });
    }
    onSubmit() { }
};
EstabelecimentosFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioAuthService"] }
];
EstabelecimentosFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estabelecimentos-form',
        template: _raw_loader_estabelecimentos_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estabelecimentos_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstabelecimentosFormPage);



/***/ }),

/***/ "7qSw":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estabelecimentos/estabelecimentos-form/estabelecimentos-form.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"formEstabelecimento\" (ngSubmit)=\"onSubmit()\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n          </ion-item>\n          <div margin-vertical>\n            <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Salvar</ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Fwdu":
/*!****************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-form/estabelecimentos-form.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EstabelecimentosFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosFormPageModule", function() { return EstabelecimentosFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estabelecimentos_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estabelecimentos-form-routing.module */ "Uk0e");
/* harmony import */ var _estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estabelecimentos-form.page */ "7U4o");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared.module */ "Ymua");








let EstabelecimentosFormPageModule = class EstabelecimentosFormPageModule {
};
EstabelecimentosFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _estabelecimentos_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstabelecimentosFormPageRoutingModule"]
        ],
        declarations: [_estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_6__["EstabelecimentosFormPage"]]
    })
], EstabelecimentosFormPageModule);



/***/ }),

/***/ "Uk0e":
/*!************************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-form/estabelecimentos-form-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EstabelecimentosFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosFormPageRoutingModule", function() { return EstabelecimentosFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estabelecimentos-form.page */ "7U4o");




const routes = [
    {
        path: '',
        component: _estabelecimentos_form_page__WEBPACK_IMPORTED_MODULE_3__["EstabelecimentosFormPage"]
    }
];
let EstabelecimentosFormPageRoutingModule = class EstabelecimentosFormPageRoutingModule {
};
EstabelecimentosFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstabelecimentosFormPageRoutingModule);



/***/ }),

/***/ "l+qM":
/*!****************************************************************************************!*\
  !*** ./src/app/estabelecimentos/estabelecimentos-form/estabelecimentos-form.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhYmVsZWNpbWVudG9zLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=estabelecimentos-estabelecimentos-form-estabelecimentos-form-module.js.map