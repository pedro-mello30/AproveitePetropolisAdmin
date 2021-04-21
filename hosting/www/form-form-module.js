(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "48HA":
/*!********************************************!*\
  !*** ./src/app/usuarios/shared/usuario.ts ***!
  \********************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "FCqU":
/*!******************************************************!*\
  !*** ./src/app/usuarios/form/form-routing.module.ts ***!
  \******************************************************/
/*! exports provided: FormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageRoutingModule", function() { return FormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.page */ "xUeh");




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"]
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormPageRoutingModule);



/***/ }),

/***/ "NUJa":
/*!**********************************************!*\
  !*** ./src/app/usuarios/form/form.module.ts ***!
  \**********************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-routing.module */ "FCqU");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.page */ "xUeh");







let FormPageModule = class FormPageModule {
};
FormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPageRoutingModule"]
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"]]
    })
], FormPageModule);



/***/ }),

/***/ "OiDi":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/form/form.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{tituloDaPagina}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form (ngSubmit)=\"onSubmit()\" #formCategoria=\"ngForm\">\n          <ion-item>\n            <ion-label position=\"floating\">Nome Da Categoria</ion-label>\n            <ion-input name=\"nome\" [(ngModel)]=\"usuario.nome\"></ion-input>\n          </ion-item>\n\n          <ion-button color=\"primary\" type=\"submit\" class=\"ion-margin-top\" slot=\"end\">Salvar</ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "XJme":
/*!**********************************************!*\
  !*** ./src/app/usuarios/form/form.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "xUeh":
/*!********************************************!*\
  !*** ./src/app/usuarios/form/form.page.ts ***!
  \********************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form.page.html */ "OiDi");
/* harmony import */ var _form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.page.scss */ "XJme");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/usuario */ "48HA");
/* harmony import */ var _shared_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/usuario.service */ "9y5M");







let FormPage = class FormPage {
    constructor(activatedRoute, router, usuarioService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usuarioService = usuarioService;
        this.tituloDaPagina = 'Adicionar Usuario';
        this.usuario = new _shared_usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        this.onSavedUsuario = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.usuarioService.getById(id).subscribe(usuario => {
                this.usuario = usuario;
                this.tituloDaPagina = 'Editar Usuario';
            });
        }
    }
    onSubmit() {
        this.usuarioService.save(this.usuario).subscribe(usuario => {
            this.onSavedUsuario.emit(this.usuario);
            this.router.navigateByUrl('usuarios');
        });
    }
    remove(categoria) {
        this.usuarioService.delete(categoria._id).subscribe(() => {
        });
    }
};
FormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] }
];
FormPage.propDecorators = {
    onSavedUsuario: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
FormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form',
        template: _raw_loader_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormPage);



/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map