(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/9Q5":
/*!***************************************************************************!*\
  !*** ./src/app/categorias/categorias-item/categorias-item.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/D/Projetos/ProjetosApps/AproveitePetropolis/AproveitePetropolisAdmin/src/main.ts */"zUnb");


/***/ }),

/***/ "0yqV":
/*!***************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-layout.component.html */ "onFo");
/* harmony import */ var _login_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-layout.component.scss */ "lSOH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoginLayoutComponent = class LoginLayoutComponent {
    constructor() { }
    ngOnInit() { }
};
LoginLayoutComponent.ctorParameters = () => [];
LoginLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-layout',
        template: _raw_loader_login_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginLayoutComponent);



/***/ }),

/***/ "3Tmr":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias-item/categorias-item.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-label>{{categoria.nome}}</ion-label>\n  <ion-button slot=\"end\" color=\"primary\" [routerLink]=\"['/categorias/editar/', categoria._id]\">\n    <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n    Editar\n  </ion-button>\n  <ion-button slot=\"end\" color=\"danger\" (click)=\"remove(categoria)\">\n    <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n    Excluir\n  </ion-button>\n</ion-item>\n");

/***/ }),

/***/ "44PU":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/home-layout/home-layout.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header><img class=\"logo\" src=\"assets/LogoAproveitePetropolis.PNG\"></ion-list-header>\n          <ion-note></ion-note>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\" routerLink=\"\" (click)=\"logout()\">\n              <ion-icon  slot=\"start\" name=\"log-out-outline\"></ion-icon>\n              <ion-label>Sair</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n\n\n      </ion-content>\n\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n\n\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'http://localhost:3000',
    firebaseConfig: {
        apiKey: "AIzaSyBsRv5nvvBWaUxedWO78JUOWR9TYWqGxcU",
        authDomain: "aproveitepetropolis-748a8.firebaseapp.com",
        projectId: "aproveitepetropolis-748a8",
        storageBucket: "aproveitepetropolis-748a8.appspot.com",
        messagingSenderId: "886116317202",
        appId: "1:886116317202:web:d53fc916e42728e6f040cb",
        measurementId: "G-326KSMGZWZ"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DAm3":
/*!***************************************************************************!*\
  !*** ./src/app/categorias/categorias-list/categorias-list.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "E+93":
/*!******************************************************!*\
  !*** ./src/app/login/shared/usuario-auth.service.ts ***!
  \******************************************************/
/*! exports provided: UsuarioAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioAuthService", function() { return UsuarioAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



let UsuarioAuthService = class UsuarioAuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    //
    // criarConta(usuario: any) {
    //   return new Promise((resolve, reject) => {
    //     this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
    //       .then((userCredential: firebase.auth.UserCredential) => {
    //         userCredential.user.updateProfile({ displayName: usuario.nome, photoURL: '' });
    //         userCredential.user.sendEmailVerification();
    //         this.logout();
    //         resolve();
    //       })
    //       .catch((error: any) => {
    //         reject(this.handlerError(error));
    //       });
    //   });
    // }
    //
    login(email, senha) {
        return new Promise((resolve, reject) => {
            this.afAuth.signInWithEmailAndPassword(email, senha)
                .then((userCredential) => {
                resolve();
            })
                .catch((error) => {
                reject(this.handlerError(error));
            });
        });
    }
    logout() {
        return this.afAuth.signOut();
    }
    enviarEmailResetarSenha(email) {
        return new Promise((resolve, reject) => {
            this.afAuth.sendPasswordResetEmail(email)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(this.handlerError(error));
            });
        });
    }
    handlerError(error) {
        let mensagem = '';
        if (error.code == 'auth/email-already-in-use') {
            mensagem = 'O e-mail informado já está sendo usado.';
        }
        else if (error.code == 'auth/invalid-email') {
            mensagem = 'O e-mail informado é inválido.';
        }
        else if (error.code == 'auth/operation-not-allowed') {
            mensagem = 'A autenticação por email e senha não está habilitada';
        }
        else if (error.code == 'auth/weak-password') {
            mensagem = 'A senha utilizada é muito fraca. Por favor escolha outra senha.';
        }
        else if (error.code == 'auth/user-disabled') {
            mensagem = 'O usuário está desabilitado, por favor contact o administrador.';
        }
        else if (error.code == 'auth/user-not-found' || error.code == 'auth/wrong-password') {
            mensagem = 'O usuario/senha inválido(s)';
        }
        return mensagem;
    }
};
UsuarioAuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
UsuarioAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioAuthService);



/***/ }),

/***/ "LZC5":
/*!********************************************!*\
  !*** ./src/app/login/shared/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthGuard = class AuthGuard {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    canActivate(next, state) {
        return this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => !!user), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(usuarioLogado => {
            if (!usuarioLogado) {
                this.router.navigate(['/login']);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "LaYZ":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/esqueci-senha/esqueci-senha.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"formEsqueciSenha\" (ngSubmit)=\"onSubmit()\">\n  <ion-item>\n    <ion-label position=\"stacked\">E-mail</ion-label>\n    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Resetar minha senha</ion-button>\n  </div>\n</form>\n<ion-button expand=\"block\" color=\"dark\" fill=\"clear\" margin-top  [routerLink]=\"['/login']\">Entrar</ion-button>\n\n");

/***/ }),

/***/ "Nlx+":
/*!*************************************************************************!*\
  !*** ./src/app/categorias/categorias-item/categorias-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriasItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasItemComponent", function() { return CategoriasItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias-item.component.html */ "3Tmr");
/* harmony import */ var _categorias_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias-item.component.scss */ "/9Q5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/categoria.service */ "Q29h");





let CategoriasItemComponent = class CategoriasItemComponent {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
        this.onDeleteCategoria = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    remove(categoria) {
        this.categoriaService.delete(categoria._id).subscribe(() => {
            this.onDeleteCategoria.emit(categoria);
        });
    }
};
CategoriasItemComponent.ctorParameters = () => [
    { type: _shared_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] }
];
CategoriasItemComponent.propDecorators = {
    categoria: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onDeleteCategoria: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
CategoriasItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias-item',
        template: _raw_loader_categorias_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasItemComponent);



/***/ }),

/***/ "Olgc":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showSuccess(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toastResult = yield this.toast.create({
                message: message,
                duration: 2000,
                color: 'success',
                position: 'top'
            });
            toastResult.present();
        });
    }
    showError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toastResult = yield this.toast.create({
                message: message,
                duration: 2000,
                color: 'danger',
                position: 'top'
            });
            toastResult.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "Q29h":
/*!********************************************************!*\
  !*** ./src/app/categorias/shared/categoria.service.ts ***!
  \********************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");




let CategoriaService = class CategoriaService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/categorias`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/categorias/${id}`);
    }
    save(categoria) {
        if (categoria._id) {
            return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/categorias/${categoria._id}`, categoria);
        }
        else {
            return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/categorias`, categoria);
        }
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/categorias/${id}`);
    }
};
CategoriaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoriaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriaService);



/***/ }),

/***/ "Qt4k":
/*!*************************************************************************!*\
  !*** ./src/app/categorias/categorias-form/categorias-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormComponent", function() { return CategoriasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias-form.component.html */ "S1yn");
/* harmony import */ var _categorias_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias-form.component.scss */ "t3mD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_categoria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/categoria */ "hZ8y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/categoria.service */ "Q29h");







let CategoriasFormComponent = class CategoriasFormComponent {
    constructor(activatedRoute, router, categoriaService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.categoriaService = categoriaService;
        this.tituloDaPagina = 'Adicionar Categoria';
        this.categoria = new _shared_categoria__WEBPACK_IMPORTED_MODULE_4__["Categoria"]();
        this.onSavedCategoria = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.categoriaService.getById(id).subscribe(categoria => {
                this.categoria = categoria;
                this.tituloDaPagina = 'Editar Categoria';
            });
        }
    }
    onSubmit() {
        this.categoriaService.save(this.categoria).subscribe(categoria => {
            this.onSavedCategoria.emit(this.categoria);
            this.router.navigateByUrl('categorias');
        });
    }
};
CategoriasFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"] }
];
CategoriasFormComponent.propDecorators = {
    onSavedCategoria: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
CategoriasFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias-form',
        template: _raw_loader_categorias_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasFormComponent);



/***/ }),

/***/ "Rnk+":
/*!****************************************************************!*\
  !*** ./src/app/login/esqueci-senha/esqueci-senha.component.ts ***!
  \****************************************************************/
/*! exports provided: EsqueciSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciSenhaComponent", function() { return EsqueciSenhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_esqueci_senha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./esqueci-senha.component.html */ "LaYZ");
/* harmony import */ var _esqueci_senha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esqueci-senha.component.scss */ "qsC0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/usuario-auth.service */ "E+93");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");







let EsqueciSenhaComponent = class EsqueciSenhaComponent {
    constructor(formBuilder, usuarioAuthService, toast) {
        this.formBuilder = formBuilder;
        this.usuarioAuthService = usuarioAuthService;
        this.toast = toast;
    }
    ngOnInit() {
        this.criarFormulario();
    }
    get email() { return this.formEsqueciSenha.get('email'); }
    criarFormulario() {
        this.formEsqueciSenha = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
    }
    onSubmit() {
        if (this.formEsqueciSenha.valid) {
            this.usuarioAuthService.enviarEmailResetarSenha(this.formEsqueciSenha.value.email)
                .then(() => {
                this.toast.showSuccess('E-mail enviado com sucesso');
            })
                .catch((mensagem) => {
                this.toast.showError(mensagem);
            });
        }
    }
};
EsqueciSenhaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioAuthService"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
EsqueciSenhaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-esqueci-senha',
        template: _raw_loader_esqueci_senha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_esqueci_senha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EsqueciSenhaComponent);



/***/ }),

/***/ "RoRH":
/*!***************************************************************!*\
  !*** ./src/app/layout/home-layout/home-layout.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.logo {\n  display: block;\n  width: 30%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpGIiwiZmlsZSI6ImhvbWUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxvZ297XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "S1yn":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias-form/categorias-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{tituloDaPagina}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form (ngSubmit)=\"onSubmit()\" #formCategoria=\"ngForm\">\n          <ion-item>\n            <ion-label position=\"floating\">Nome Da Categoria</ion-label>\n            <ion-input name=\"nome\" [(ngModel)]=\"categoria.nome\"></ion-input>\n          </ion-item>\n\n          <ion-button color=\"primary\" type=\"submit\" class=\"ion-margin-top\" slot=\"end\">Salvar</ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "SUeN":
/*!*************************************************************!*\
  !*** ./src/app/layout/home-layout/home-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-layout.component.html */ "44PU");
/* harmony import */ var _home_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-layout.component.scss */ "RoRH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let HomeLayoutComponent = class HomeLayoutComponent {
    constructor(usuarioAuthService, router) {
        this.usuarioAuthService = usuarioAuthService;
        this.router = router;
        this.appPages = [
            { title: 'Usuários', url: '/usuarios', icon: 'people' },
            { title: 'Estabelecimentos', url: '/estabelecimentos', icon: 'storefront' },
            { title: 'Categorias', url: '/categorias', icon: 'grid' },
        ];
    }
    ngOnInit() { }
    logout() {
        this.usuarioAuthService.logout()
            .then(() => {
            this.router.navigate(['/login']);
        });
    }
};
HomeLayoutComponent.ctorParameters = () => [
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomeLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-layout',
        template: _raw_loader_home_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeLayoutComponent);



/***/ }),

/***/ "SYwc":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"card card-login mx-auto mt-5\">-->\n<!--  <div class=\"card-header\">Login</div>-->\n<!--  <div class=\"card-body\">-->\n<!--    <form [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">-->\n<!--      <div class=\"form-group\">-->\n<!--        <label for=\"email\">E-mail</label>-->\n<!--        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"E-mail\" formControlName=\"email\">-->\n<!--      </div>-->\n<!--      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">-->\n<!--        <div *ngIf=\"email.errors.required\">-->\n<!--          O e-mail é obrigatório.-->\n<!--        </div>-->\n<!--        <div *ngIf=\"email.errors.email\">-->\n<!--          O e-mail é inválido.-->\n<!--        </div>-->\n<!--      </div>-->\n\n<!--      <div class=\"form-group\">-->\n<!--        <label for=\"senha\">Senha</label>-->\n<!--        <input type=\"password\" class=\"form-control\" id=\"senha\" placeholder=\"Senha\" formControlName=\"senha\">-->\n<!--      </div>-->\n<!--      <div *ngIf=\"senha.invalid && (senha.dirty || senha.touched)\" class=\"alert alert-danger\">-->\n<!--        <div *ngIf=\"senha.errors.required\">-->\n<!--          A senha é obrigatório.-->\n<!--        </div>-->\n<!--      </div>-->\n\n<!--      <button type=\"submit\" class=\"btn btn-primary btn-block\">Entrar</button>-->\n<!--    </form>-->\n<!--    <div class=\"text-center\">-->\n<!--      <a class=\"d-block small mt-3\" [routerLink]=\"['/criar-conta']\">Criar conta</a>-->\n<!--      <a class=\"d-block small\" [routerLink]=\"['/esqueci-senha']\">Esqueci minha senha</a>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--</div>-->\n\n\n\n<!--<ion-header>-->\n<!--  <ion-toolbar color=\"primary\">-->\n<!--    <ion-title>login</ion-title>-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n\n<!--<ion-content>-->\n\n<!--  <ion-grid>-->\n<!--    <ion-row >-->\n<!--      <ion-col size-lg=\"4\" offset-lg=\"4\">-->\n\n<!--        <div class=\"card-login\">-->\n<!--          <img class=\"logoLogin\" src=\"assets/LogoAproveitePetropolis.PNG\">-->\n\n          <form [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">\n            <ion-item>\n              <ion-label position=\"stacked\">E-mail</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Senha</ion-label>\n              <ion-input type=\"password\" formControlName=\"senha\"></ion-input>\n            </ion-item>\n\n            <div margin-vertical>\n              <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Entrar</ion-button>\n            </div>\n          </form>\n\n          <ion-button expand=\"block\" color=\"dark\" fill=\"clear\" margin-top [routerLink]=\"['/login/esqueci-senha']\">Esqueci minha senha</ion-button>\n<!--        </div>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n<!--  </ion-grid>-->\n<!--</ion-content>-->\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet id=\"main-content\"></router-outlet>\n");

/***/ }),

/***/ "Ymua":
/*!***************************************!*\
  !*** ./src/app/core/shared.module.ts ***!
  \***************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _categorias_categorias_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorias/categorias.module */ "cHTx");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "SUeN");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "0yqV");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login/login.component */ "gEuR");
/* harmony import */ var _login_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/esqueci-senha/esqueci-senha.component */ "Rnk+");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/shared.module */ "Ymua");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_12__["HomeLayoutComponent"],
            _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__["LoginLayoutComponent"],
            _login_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _login_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_15__["EsqueciSenhaComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            _categorias_categorias_module__WEBPACK_IMPORTED_MODULE_8__["CategoriasModule"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
    })
], AppModule);



/***/ }),

/***/ "cHTx":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-form/categorias-form.component */ "Qt4k");
/* harmony import */ var _categorias_list_categorias_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias-list/categorias-list.component */ "k77z");
/* harmony import */ var _categorias_item_categorias_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categorias-item/categorias-item.component */ "Nlx+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let CategoriasModule = class CategoriasModule {
};
CategoriasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        ],
        declarations: [
            _categorias_list_categorias_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasListComponent"],
            _categorias_item_categorias_item_component__WEBPACK_IMPORTED_MODULE_7__["CategoriasItemComponent"],
            _categorias_form_categorias_form_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasFormComponent"]
        ]
    })
], CategoriasModule);



/***/ }),

/***/ "gEuR":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "SYwc");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "wllr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/usuario-auth.service */ "E+93");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/toast.service */ "Olgc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LoginComponent = class LoginComponent {
    constructor(formBuilder, usuarioService, router, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toast = toast;
    }
    ngOnInit() {
        this.criarFormulario();
    }
    get email() { return this.formLogin.get('email'); }
    get senha() { return this.formLogin.get('senha'); }
    criarFormulario() {
        this.formLogin = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    onSubmit() {
        if (this.formLogin.valid) {
            this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
                .then(() => {
                this.router.navigate(['/usuarios']);
            })
                .catch((mensagem) => {
                this.toast.showError(mensagem);
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "hZ8y":
/*!************************************************!*\
  !*** ./src/app/categorias/shared/categoria.ts ***!
  \************************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
class Categoria {
}


/***/ }),

/***/ "k77z":
/*!*************************************************************************!*\
  !*** ./src/app/categorias/categorias-list/categorias-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasListComponent", function() { return CategoriasListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias-list.component.html */ "pedn");
/* harmony import */ var _categorias_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias-list.component.scss */ "DAm3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/categoria.service */ "Q29h");





let CategoriasListComponent = class CategoriasListComponent {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
        this.categorias = [];
    }
    ngOnInit() {
        this.categoriaService.getAll().subscribe(categorias => {
            this.categorias = categorias;
        });
    }
    onCategoriaDeleted(categoria) {
        if (categoria) {
            const index = this.categorias.findIndex((categoriaItem) => categoriaItem._id === categoria._id);
            this.categorias.splice(index, 1);
        }
    }
};
CategoriasListComponent.ctorParameters = () => [
    { type: _shared_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] }
];
CategoriasListComponent.propDecorators = {
    categorias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CategoriasListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias-list',
        template: _raw_loader_categorias_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasListComponent);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lSOH":
/*!*****************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logoLogin {\n  display: block;\n  width: 50%;\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-login {\n  width: 100%;\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvTG9naW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZC1sb2dpbntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "onFo":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/login-layout/login-layout.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n  <ion-grid>\n    <ion-row >\n      <ion-col size-lg=\"4\" offset-lg=\"4\">\n\n        <div class=\"card-login\">\n          <img class=\"logoLogin\" src=\"assets/LogoAproveitePetropolis.PNG\">\n\n          <router-outlet></router-outlet>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "pedn":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias-list/categorias-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Categorias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/categorias/adicionar']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"categorias.length == 0\" class=\"alert alert-warning\" role=\"alert\">\n          Nenhuma categoria cadastrada.\n        </div>\n        <div *ngIf=\"categorias.length > 0\">\n          <app-categorias-item *ngFor=\"let categoria of categorias\" [categoria]=\"categoria\" (onDeleteCategoria)=\"onCategoriaDeleted($event)\"></app-categorias-item>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "qsC0":
/*!******************************************************************!*\
  !*** ./src/app/login/esqueci-senha/esqueci-senha.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3F1ZWNpLXNlbmhhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "t3mD":
/*!***************************************************************************!*\
  !*** ./src/app/categorias/categorias-form/categorias-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdGVnb3JpYXMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJjYXRlZ29yaWFzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "SUeN");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "0yqV");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login/login.component */ "gEuR");
/* harmony import */ var _login_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/esqueci-senha/esqueci-senha.component */ "Rnk+");
/* harmony import */ var _login_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/shared/auth.guard */ "LZC5");








const routes = [
    {
        path: '',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        canActivate: [_login_shared_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: 'usuarios', loadChildren: () => __webpack_require__.e(/*! import() | usuarios-usuarios-module */ "usuarios-usuarios-module").then(__webpack_require__.bind(null, /*! ./usuarios/usuarios.module */ "0G8V")).then(m => m.UsuariosPageModule) },
            { path: 'estabelecimentos',
                loadChildren: () => __webpack_require__.e(/*! import() | estabelecimentos-estabelecimentos-module */ "estabelecimentos-estabelecimentos-module").then(__webpack_require__.bind(null, /*! ./estabelecimentos/estabelecimentos.module */ "ep0g")).then(m => m.EstabelecimentosPageModule) },
        ]
    },
    {
        path: 'login',
        component: _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_4__["LoginLayoutComponent"],
        children: [
            { path: '', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'esqueci-senha', component: _login_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_6__["EsqueciSenhaComponent"] }
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wllr":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logoLogin {\n  display: block;\n  width: 50%;\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card-login {\n  width: 100%;\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb0xvZ2lue1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcmQtbG9naW57XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG4iXX0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map