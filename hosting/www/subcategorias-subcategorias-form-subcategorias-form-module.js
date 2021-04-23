(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subcategorias-subcategorias-form-subcategorias-form-module"],{

/***/ "4ucx":
/*!*****************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-form/subcategorias-form.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SubcategoriasFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasFormPage", function() { return SubcategoriasFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subcategorias_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subcategorias-form.page.html */ "dCYI");
/* harmony import */ var _subcategorias_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategorias-form.page.scss */ "5PGN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorias_shared_categorias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../categorias/shared/categorias.service */ "xMlV");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");
/* harmony import */ var _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/subcategorias.service */ "aw4o");









let SubcategoriasFormPage = class SubcategoriasFormPage {
    constructor(formBuilder, route, router, categoriaService, subcategoriaService, toast) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.categoriaService = categoriaService;
        this.subcategoriaService = subcategoriaService;
        this.toast = toast;
        this.title = 'Nova Subcategoria';
        this.file = null;
        this.imagemUrl = '';
        this.filePath = '';
    }
    ngOnInit() {
        this.criarFormulario();
        this.categorias = this.categoriaService.getAll();
        const key = this.route.snapshot.paramMap.get('key');
        if (key) {
            this.title = 'Editar Subcategoria';
            const subscribe = this.subcategoriaService.getByKey(key).subscribe((subcategoria) => {
                subscribe.unsubscribe();
                this.key = subcategoria.key;
                this.formSubcategorias.setValue({
                    nome: subcategoria.nome,
                    categoriaKey: subcategoria.categoriaKey,
                    categoriaNome: subcategoria.categoriaNome,
                    imagem: ''
                });
                this.imagemUrl = subcategoria.imagem || '';
                this.filePath = subcategoria.filePath || '';
            });
        }
    }
    get nome() { return this.formSubcategorias.get('nome'); }
    get categoriaKey() { return this.formSubcategorias.get('categoriaKey'); }
    get categoriaNome() { return this.formSubcategorias.get('categoriaNome'); }
    get imagem() { return this.formSubcategorias.get('imagem'); }
    criarFormulario() {
        this.formSubcategorias = this.formBuilder.group({
            nome: [''],
            categoriaKey: [''],
            categoriaNome: [''],
            imagem: ['']
        });
        this.file = null;
        this.imagemUrl = '';
        this.filePath = '';
    }
    setCategoriaNome(categoriaKey) {
        const categ = this.categoriaService.getByKey(categoriaKey).subscribe((categoria) => {
            categ.unsubscribe();
            this.categoriaNome.setValue(categoria.nome);
        });
    }
    uploadImagem(event) {
        if (event.target.files.length) {
            this.file = event.target.files[0];
            this.formSubcategorias.get('imagem').updateValueAndValidity();
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
            this.subcategoriaService.removeImg(this.filePath, this.key);
        this.imagemUrl = '';
        this.filePath = '';
    }
    onSubmit() {
        if (this.formSubcategorias.valid) {
            let result;
            if (this.key) {
                result = this.subcategoriaService.update(this.formSubcategorias.value, this.key);
            }
            else {
                result = this.subcategoriaService.insert(this.formSubcategorias.value);
            }
            if (this.file) {
                result.then((key) => {
                    this.subcategoriaService.uploadImg(key, this.file);
                    this.criarFormulario();
                });
            }
            else {
                this.criarFormulario();
            }
            this.toast.showSuccess('Subcategoria salva');
            this.router.navigate(['/subcategorias']);
        }
    }
};
SubcategoriasFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _categorias_shared_categorias_service__WEBPACK_IMPORTED_MODULE_6__["CategoriasService"] },
    { type: _shared_subcategorias_service__WEBPACK_IMPORTED_MODULE_8__["SubcategoriasService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
SubcategoriasFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subcategorias-form',
        template: _raw_loader_subcategorias_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subcategorias_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubcategoriasFormPage);



/***/ }),

/***/ "5PGN":
/*!*******************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-form/subcategorias-form.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjYXRlZ29yaWFzLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "O5uu":
/*!*******************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-form/subcategorias-form.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SubcategoriasFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasFormPageModule", function() { return SubcategoriasFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subcategorias_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategorias-form-routing.module */ "QIW7");
/* harmony import */ var _subcategorias_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcategorias-form.page */ "4ucx");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared.module */ "Ymua");








let SubcategoriasFormPageModule = class SubcategoriasFormPageModule {
};
SubcategoriasFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _subcategorias_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubcategoriasFormPageRoutingModule"]
        ],
        declarations: [_subcategorias_form_page__WEBPACK_IMPORTED_MODULE_6__["SubcategoriasFormPage"]],
    })
], SubcategoriasFormPageModule);



/***/ }),

/***/ "QIW7":
/*!***************************************************************************************!*\
  !*** ./src/app/subcategorias/subcategorias-form/subcategorias-form-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SubcategoriasFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoriasFormPageRoutingModule", function() { return SubcategoriasFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subcategorias_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subcategorias-form.page */ "4ucx");




const routes = [
    {
        path: '',
        component: _subcategorias_form_page__WEBPACK_IMPORTED_MODULE_3__["SubcategoriasFormPage"]
    }
];
let SubcategoriasFormPageRoutingModule = class SubcategoriasFormPageRoutingModule {
};
SubcategoriasFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubcategoriasFormPageRoutingModule);



/***/ }),

/***/ "dCYI":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcategorias/subcategorias-form/subcategorias-form.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"formSubcategorias\" (ngSubmit)=\"onSubmit()\">\n          <ion-item>\n            <ion-label position=\"stacked\">Categoria</ion-label>\n\n            <ion-select placeholder=\"Escolher\" formControlName=\"categoriaKey\" (ionChange)=\"setCategoriaNome($event.target.value)\">\n              <ion-select-option *ngFor=\"let categoria of categorias | async\" value=\"{{categoria.key}}\" selected-text=\"{{categoria.nome}}\">{{categoria.nome}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n          </ion-item>\n          <!--          <app-validation-container [control]=\"nome\"></app-validation-container>-->\n\n          <ion-item *ngIf=\"imagemUrl ==''\">\n            <ion-button color=\"primary\" (click)=\"imagemInput.click()\">Adicionar Imagem</ion-button>\n            <input type=\"file\" #imagemInput formControlName=\"imagem\" (change)=\"uploadImagem($event)\">\n          </ion-item>\n\n          <ion-item *ngIf=\"imagemUrl !=''\">\n            <ion-thumbnail slot=\"start\">\n              <img [src]=\"imagemUrl\">\n            </ion-thumbnail>\n            <ion-button color=\"danger\" (click)=\"removeImagem()\">Remover Imagem</ion-button>\n          </ion-item>\n\n          <div margin-vertical>\n            <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Salvar</ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=subcategorias-subcategorias-form-subcategorias-form-module.js.map