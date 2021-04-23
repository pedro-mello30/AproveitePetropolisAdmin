(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-form-categorias-form-module"],{

/***/ "3DGz":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias-form/categorias-form.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"formCategorias\" (ngSubmit)=\"onSubmit()\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n          </ion-item>\n<!--          <app-validation-container [control]=\"nome\"></app-validation-container>-->\n\n          <ion-item *ngIf=\"imagemUrl ==''\">\n<!--            <ion-label position=\"stacked\">Foto</ion-label>-->\n            <ion-button color=\"primary\" (click)=\"imagemInput.click()\">Adicionar Imagem</ion-button>\n            <input type=\"file\" #imagemInput formControlName=\"imagem\" (change)=\"uploadImagem($event)\">\n          </ion-item>\n\n          <ion-item *ngIf=\"imagemUrl !=''\">\n\n            <ion-thumbnail slot=\"start\">\n              <img [src]=\"imagemUrl\">\n            </ion-thumbnail>\n            <ion-button color=\"danger\" (click)=\"removeImagem()\">Remover Imagem</ion-button>\n          </ion-item>\n\n          <div margin-vertical>\n            <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Salvar</ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "M5Yi":
/*!**********************************************************************!*\
  !*** ./src/app/categorias/categorias-form/categorias-form.module.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriasFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormPageModule", function() { return CategoriasFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categorias_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-form-routing.module */ "YVNY");
/* harmony import */ var _categorias_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias-form.page */ "kbvH");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared.module */ "Ymua");








let CategoriasFormPageModule = class CategoriasFormPageModule {
};
CategoriasFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _categorias_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasFormPageRoutingModule"]
        ],
        declarations: [_categorias_form_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasFormPage"]]
    })
], CategoriasFormPageModule);



/***/ }),

/***/ "YVNY":
/*!******************************************************************************!*\
  !*** ./src/app/categorias/categorias-form/categorias-form-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CategoriasFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormPageRoutingModule", function() { return CategoriasFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorias_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias-form.page */ "kbvH");




const routes = [
    {
        path: '',
        component: _categorias_form_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasFormPage"]
    }
];
let CategoriasFormPageRoutingModule = class CategoriasFormPageRoutingModule {
};
CategoriasFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasFormPageRoutingModule);



/***/ }),

/***/ "b+jO":
/*!**********************************************************************!*\
  !*** ./src/app/categorias/categorias-form/categorias-form.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kbvH":
/*!********************************************************************!*\
  !*** ./src/app/categorias/categorias-form/categorias-form.page.ts ***!
  \********************************************************************/
/*! exports provided: CategoriasFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormPage", function() { return CategoriasFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias-form.page.html */ "3DGz");
/* harmony import */ var _categorias_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias-form.page.scss */ "b+jO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_categorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/categorias.service */ "xMlV");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");








let CategoriasFormPage = class CategoriasFormPage {
    constructor(formBuilder, route, router, categoriaService, toast) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.categoriaService = categoriaService;
        this.toast = toast;
        this.title = 'Nova Categoria';
        this.file = null;
        this.imagemUrl = '';
        this.filePath = '';
    }
    ngOnInit() {
        this.criarFormulario();
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            this.title = 'Editar Categoria';
            const subscribe = this.categoriaService.getByKey(key).subscribe((categoria) => {
                subscribe.unsubscribe();
                this.key = categoria.key;
                this.formCategorias.setValue({
                    nome: categoria.nome,
                    imagem: ''
                });
                this.imagemUrl = categoria.imagem || '';
                this.filePath = categoria.filePath || '';
            });
        }
    }
    get nome() { return this.formCategorias.get('nome'); }
    get imagem() { return this.formCategorias.get('imagem'); }
    criarFormulario() {
        this.key = null;
        this.formCategorias = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            imagem: [''],
        });
        this.file = null;
        this.imagemUrl = '';
        this.filePath = '';
    }
    uploadImagem(event) {
        if (event.target.files.length) {
            this.file = event.target.files[0];
            this.formCategorias.get('imagem').updateValueAndValidity();
            const reader = new FileReader();
            reader.onload = () => {
                this.imagemUrl = reader.result.toString();
            };
            reader.readAsDataURL(this.file);
        }
        else {
            this.file = null;
        }
    }
    removeImagem() {
        if (this.key)
            this.categoriaService.removeImg(this.filePath, this.key);
        this.imagemUrl = '';
        this.filePath = '';
    }
    onSubmit() {
        if (this.formCategorias.valid) {
            let result;
            if (this.key) {
                result = this.categoriaService.update(this.formCategorias.value, this.key);
            }
            else {
                result = this.categoriaService.insert(this.formCategorias.value);
            }
            if (this.file) {
                result.then((key) => {
                    this.categoriaService.uploadImg(key, this.file);
                    this.criarFormulario();
                });
            }
            else {
                this.criarFormulario();
            }
            this.toast.showSuccess('Categoria salva');
            this.router.navigate(['/categorias']);
        }
    }
};
CategoriasFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
CategoriasFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias-form',
        template: _raw_loader_categorias_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasFormPage);



/***/ })

}]);
//# sourceMappingURL=categorias-categorias-form-categorias-form-module.js.map