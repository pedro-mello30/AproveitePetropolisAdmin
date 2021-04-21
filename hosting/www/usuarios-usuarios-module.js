(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "0G8V":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-routing.module */ "JctN");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "pf1+");







let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"]
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })
], UsuariosPageModule);



/***/ }),

/***/ "9y5M":
/*!****************************************************!*\
  !*** ./src/app/usuarios/shared/usuario.service.ts ***!
  \****************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/usuarios`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/usuarios/${id}`);
    }
    save(categoria) {
        if (categoria._id) {
            return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/usuarios/${categoria._id}`, categoria);
        }
        else {
            return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/usuarios`, categoria);
        }
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/usuarios/${id}`);
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ "JctN":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function() { return UsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.page */ "pf1+");




const routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    },
    {
        path: 'adicionar',
        loadChildren: () => __webpack_require__.e(/*! import() | form-form-module */ "form-form-module").then(__webpack_require__.bind(null, /*! ./form/form.module */ "NUJa")).then(m => m.FormPageModule)
    },
    {
        path: 'editar/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | form-form-module */ "form-form-module").then(__webpack_require__.bind(null, /*! ./form/form.module */ "NUJa")).then(m => m.FormPageModule)
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ "QTbk":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Rgih":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Usuários</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/usuarios/adicionar']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"usuarios.length == 0\" class=\"alert alert-warning\" role=\"alert\">\n          Nenhum usuario cadastrado.\n        </div>\n        <div *ngIf=\"usuarios.length > 0\">\n          <ion-item *ngFor=\"let categoria of usuarios\">\n            <ion-label>{{categoria.nome}}</ion-label>\n            <ion-button slot=\"end\" color=\"primary\" [routerLink]=\"['/categorias/editar/', categoria._id]\">\n              <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n              Editar\n            </ion-button>\n            <ion-button slot=\"end\" color=\"danger\" (click)=\"remove(categoria)\">\n              <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n              Excluir\n            </ion-button>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n\n\n\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "pf1+":
/*!*******************************************!*\
  !*** ./src/app/usuarios/usuarios.page.ts ***!
  \*******************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuarios.page.html */ "Rgih");
/* harmony import */ var _usuarios_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.page.scss */ "QTbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/usuario.service */ "9y5M");





let UsuariosPage = class UsuariosPage {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuarios = [];
    }
    ngOnInit() {
        this.usuarioService.getAll().subscribe(usuarios => {
            this.usuarios = usuarios;
        });
    }
    onCategoriaDeleted(usuario) {
        if (usuario) {
            const index = this.usuarios.findIndex((usuarioItem) => usuarioItem._id === usuario._id);
            this.usuarios.splice(index, 1);
        }
    }
};
UsuariosPage.ctorParameters = () => [
    { type: _shared_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
UsuariosPage.propDecorators = {
    usuarios: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UsuariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuarios',
        template: _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuarios_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsuariosPage);



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module.js.map