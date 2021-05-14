(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/D/Projetos/ProjetosApps/AproveitePetropolis/AproveitePetropolisAdmin/src/main.ts */"zUnb");


/***/ }),

/***/ "0R3S":
/*!**************************************************************!*\
  !*** ./src/app/usuarios/usuarios-form/usuarios-form.page.ts ***!
  \**************************************************************/
/*! exports provided: UsuariosFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormPage", function() { return UsuariosFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuarios_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuarios-form.page.html */ "SeLe");
/* harmony import */ var _usuarios_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios-form.page.scss */ "3iSI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/shared/usuario-auth.service */ "E+93");






// const firebaseAdmin = require('firebase-admin');
// import {environment} from '../../../environments/environment';
//
// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(environment.adminFirebaseConfig)
// });
let UsuariosFormPage = class UsuariosFormPage {
    constructor(formBuilder, usuarioAuthService) {
        this.formBuilder = formBuilder;
        this.usuarioAuthService = usuarioAuthService;
        this.title = 'Novo Usuário';
    }
    ngOnInit() {
        this.criarFormulario();
    }
    criarFormulario() {
        this.formUsuario = this.formBuilder.group({
            nome: [''],
            email: [''],
            senha: ['']
        });
    }
    onSubmit() { }
};
UsuariosFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _login_shared_usuario_auth_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioAuthService"] }
];
UsuariosFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuarios-form',
        template: _raw_loader_usuarios_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuarios_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsuariosFormPage);



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

/***/ "3iSI":
/*!****************************************************************!*\
  !*** ./src/app/usuarios/usuarios-form/usuarios-form.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy1mb3JtLnBhZ2Uuc2NzcyJ9 */");

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

/***/ "5A7i":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/validation-container/validation-container.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngIf=\"control.invalid && (control.dirty || control.touched)\" lines=\"none\">\n  <ion-label color=\"danger\" *ngIf=\"control.errors.required\">Esse campo é obrigatório</ion-label>\n</ion-item>\n\n");

/***/ }),

/***/ "6gee":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios-lista/usuarios-lista.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Usuários</ion-title>\n    <ion-button slot=\"end\" class=\"ion-margin-end\" [routerLink]=\"['/usuarios/novo']\">Novo</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"usuarios.length == 0\" class=\"alert alert-warning\" role=\"alert\">\n          Nenhuma usuário cadastrado.\n        </div>\n        <div *ngIf=\"usuarios.length > 0\">\n          <ion-item *ngFor=\"let usuario of usuarios\">\n            <ion-label>{{usuario.nome}}</ion-label>\n            <ion-button slot=\"end\" color=\"primary\" [routerLink]=\"['/categorias/editar/', usuario._id]\">\n              <ion-icon slot=\"start\" ios=\"create-outline\" md=\"create-outline\"></ion-icon>\n              Editar\n            </ion-button>\n            <ion-button slot=\"end\" color=\"danger\" (click)=\"remove()\">\n              <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n              Excluir\n            </ion-button>\n          </ion-item>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "9XuG":
/*!******************************************************************!*\
  !*** ./src/app/usuarios/usuarios-lista/usuarios-lista.module.ts ***!
  \******************************************************************/
/*! exports provided: UsuariosListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListaPageModule", function() { return UsuariosListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuarios_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-lista-routing.module */ "jHOf");
/* harmony import */ var _usuarios_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios-lista.page */ "SlJs");







let UsuariosListaPageModule = class UsuariosListaPageModule {
};
UsuariosListaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_lista_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosListaPageRoutingModule"]
        ],
        declarations: [_usuarios_lista_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosListaPage"]]
    })
], UsuariosListaPageModule);



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
    },
    adminFirebaseConfig: {
        "type": "service_account",
        "project_id": "aproveitepetropolis-748a8",
        "private_key_id": "74024c0708b9364c5bf4a8e9923cc3338763f063",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5rOdEK3Civvsa\nnoX3Rp2Cw6mLOpMKS4fmwSi526bk2n1hh8K7kVfhww9KuysyL/MOHpY6J6ekELay\n6cklucfAkh2Tg6uUnV3CkhvN/tORP1fn0+0VZEf4FWFeTam18OZ/YdWU6cnciBbF\nQLhQe5xt9zCkCM42ywl9qo9tDhzGsWexDXVO306hHFWaHNCEi2NNbdrTTd0Q1BQo\nlOBzya5OiceLjdlVhtmP+ryw1zK0ibpE/aATGZ7xjDSMxnD+mHYG5XM8aGzkiNbo\nmDPVTp11Ig8p3gXG1NE7dDI1AiNJg3C7XoYGxMRMShVPY/d+c/MAdofEeYHyb177\nBsSvJjxfAgMBAAECggEAQlRWObAbCMiZA6VlzjRXyIMFakt+g8r/vZt7ZQnm0RKM\nf+7zzfXaIzh/mf7LK56dgYnDuPq5lI6z9a42wVdg2JZaInyDKxAckomHjUtfYR/z\n00mOBHpSi3l30yyDWA+7B/53Qj9ScYncOJMqRPYjp9UKd079++0EcvQfUKId/Yx9\no7PA3Yg7TC1nXVqWq4DJeNsb913aHE4TTpZPkiQLcoKE5zpyHOkHNklusnAapmv4\n6Ig1AI5mjIIf9YaicjT81YLfQ+BA5Dae0D4br/96uUxUzgnfeDFo5ICxqTfk54dr\nUCifDPofdVIXPLK1tgHyvV6sJm3sG9J1PI3umeJvQQKBgQD350h+0HemjmfxY/+M\nIxZC1lJn0k1BFhfMBftsA5V87GvwhBJz+dUyrNRsDTFMb0GwvjrGkh5kfipr+vUL\naJJoNe5ye5jCMQdr9JYgG6b/Pwfl8Ckw24wL+9kAgIz1GGAQatspfsYP4LuLyt6V\nsnaj+K2uaJjLl1AfTa6Gx4K2twKBgQC/vVUeMa0PYNt0aHq8ScHgdU6+xnXxYGzF\nFo3AzOOyeH0yHe1GktBEcKLIhvgHLYvtIoA4MFWlI+b2Gt2DOzque7ji2ZKDKB33\ntx1Ic1UvdSOsSHXra/Pc2KEIC5E8uCeWd5J1tP0gHBx2MtclbiGEDHL5aDB2kQX0\n2g3lYXA/mQKBgGxUzpJUSSUor/WFrGOx5YV5oPMrrITXwbhvmMo/2rCHpDerj2DM\n+US2z/ET5sovCDbTOl4R9mQV2jXrqe+9V9VgU/4FUuDxifu8G2qWiuiZw7rQsz9d\ngZqvCMo2YuKsLzada357ntPLckmJcrFaFoxbHJLNtI+rZOD5El5lixKLAoGAQ/4X\n2QU0oWdvavBB1dMx9S6kJfKqkFXpPFqrGduOQxOHEeaa5ZPaVuq6TvHNsn3sSMMb\nRNGfDViV5l/QfWDbhlRJU+hjlC79sYI12CNN6e5YIBfx+PHnIEGRmRDBCA8luq3c\nOfFcca6GSUPuF0/egr0HaHoR9Xmn6xQIKXdMHsECgYAapODWsdG+PYzRZYHE1f5D\nO7rxszfLTfbChKaaqiuHjXQJn/Eg5Cb//oPy6cRBE+n/pEjKa5FqEHAv8k1QUTCe\nhkSUTbu9Y4rwa3/HOArqvqTOtdBLGdnrUrVaj3T8SBszO4bLdAmcCIaK3NL73T9g\nahzzgNynSXHddmdaoGhUZw==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-x2ne2@aproveitepetropolis-748a8.iam.gserviceaccount.com",
        "client_id": "106735602122422429122",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x2ne2%40aproveitepetropolis-748a8.iam.gserviceaccount.com"
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

/***/ "Fwh9":
/*!******************************************************************!*\
  !*** ./src/app/usuarios/usuarios-lista/usuarios-lista.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy1saXN0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "H/Xy":
/*!************************************************************************!*\
  !*** ./src/app/usuarios/usuarios-form/usuarios-form-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UsuariosFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormPageRoutingModule", function() { return UsuariosFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuarios_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios-form.page */ "0R3S");




const routes = [
    {
        path: '',
        component: _usuarios_form_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosFormPage"]
    }
];
let UsuariosFormPageRoutingModule = class UsuariosFormPageRoutingModule {
};
UsuariosFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosFormPageRoutingModule);



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
            { title: 'Subcategorias', url: '/subcategorias', icon: 'grid' },
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
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"formLogin\" (keydown)=\"keyDown($event.keyCode)\" (ngSubmit)=\"onSubmit()\">\n  <ion-item>\n    <ion-label position=\"stacked\">E-mail</ion-label>\n    <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Senha</ion-label>\n    <ion-input type=\"password\" formControlName=\"senha\"></ion-input>\n  </ion-item>\n\n  <div margin-vertical>\n    <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Entrar</ion-button>\n  </div>\n</form>\n\n<ion-button expand=\"block\" color=\"dark\" fill=\"clear\" margin-top [routerLink]=\"['/login/esqueci-senha']\">Esqueci minha senha</ion-button>\n\n");

/***/ }),

/***/ "SeLe":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios-form/usuarios-form.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"formUsuario\" (ngSubmit)=\"onSubmit()\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">E-mail</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Senha</ion-label>\n            <ion-input type=\"password\" formControlName=\"senha\"></ion-input>\n          </ion-item>\n          <div margin-vertical>\n            <ion-button color=\"primary\" expand=\"block\" type=\"submit\">Salvar</ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "SlJs":
/*!****************************************************************!*\
  !*** ./src/app/usuarios/usuarios-lista/usuarios-lista.page.ts ***!
  \****************************************************************/
/*! exports provided: UsuariosListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListaPage", function() { return UsuariosListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usuarios_lista_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usuarios-lista.page.html */ "6gee");
/* harmony import */ var _usuarios_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios-lista.page.scss */ "Fwh9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UsuariosListaPage = class UsuariosListaPage {
    constructor() {
        this.usuarios = [
            { nome: 'Usuário' }
        ];
    }
    ngOnInit() {
    }
    remove() { }
};
UsuariosListaPage.ctorParameters = () => [];
UsuariosListaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usuarios-lista',
        template: _raw_loader_usuarios_lista_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usuarios_lista_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsuariosListaPage);



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

/***/ "XbNj":
/*!****************************************************************!*\
  !*** ./src/app/usuarios/usuarios-form/usuarios-form.module.ts ***!
  \****************************************************************/
/*! exports provided: UsuariosFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormPageModule", function() { return UsuariosFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuarios_form_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios-form-routing.module */ "H/Xy");
/* harmony import */ var _usuarios_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-form.page */ "0R3S");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/shared.module */ "Ymua");







let UsuariosFormPageModule = class UsuariosFormPageModule {
};
UsuariosFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _usuarios_form_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsuariosFormPageRoutingModule"],
        ],
        declarations: [_usuarios_form_page__WEBPACK_IMPORTED_MODULE_5__["UsuariosFormPage"]]
    })
], UsuariosFormPageModule);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_validation_container_validation_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validation-container/validation-container.component */ "p3/B");
/* harmony import */ var _shared_ionic_mask_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/ionic-mask.directive */ "xIym");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_validation_container_validation_container_component__WEBPACK_IMPORTED_MODULE_4__["ValidationContainerComponent"],
            _shared_ionic_mask_directive__WEBPACK_IMPORTED_MODULE_5__["IonicMaskDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components_validation_container_validation_container_component__WEBPACK_IMPORTED_MODULE_4__["ValidationContainerComponent"],
            _shared_ionic_mask_directive__WEBPACK_IMPORTED_MODULE_5__["IonicMaskDirective"]
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "SUeN");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "0yqV");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login/login.component */ "gEuR");
/* harmony import */ var _login_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/esqueci-senha/esqueci-senha.component */ "Rnk+");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/shared.module */ "Ymua");
/* harmony import */ var _usuarios_usuarios_form_usuarios_form_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./usuarios/usuarios-form/usuarios-form.module */ "XbNj");
/* harmony import */ var _usuarios_usuarios_lista_usuarios_lista_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./usuarios/usuarios-lista/usuarios-lista.module */ "9XuG");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "bhdO");





















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_11__["HomeLayoutComponent"],
            _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_12__["LoginLayoutComponent"],
            _login_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _login_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_14__["EsqueciSenhaComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
            _usuarios_usuarios_form_usuarios_form_module__WEBPACK_IMPORTED_MODULE_16__["UsuariosFormPageModule"],
            _usuarios_usuarios_lista_usuarios_lista_module__WEBPACK_IMPORTED_MODULE_17__["UsuariosListaPageModule"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_20__["NgxViacepModule"],
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
    keyDown(key) {
        if (key === 13)
            this.onSubmit();
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

/***/ "jHOf":
/*!**************************************************************************!*\
  !*** ./src/app/usuarios/usuarios-lista/usuarios-lista-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UsuariosListaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListaPageRoutingModule", function() { return UsuariosListaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuarios_lista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios-lista.page */ "SlJs");




const routes = [
    {
        path: '',
        component: _usuarios_lista_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosListaPage"]
    }
];
let UsuariosListaPageRoutingModule = class UsuariosListaPageRoutingModule {
};
UsuariosListaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosListaPageRoutingModule);



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

/***/ "oNar":
/*!******************************************************************************************!*\
  !*** ./src/app/core/components/validation-container/validation-container.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "p3/B":
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/validation-container/validation-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ValidationContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationContainerComponent", function() { return ValidationContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_validation_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./validation-container.component.html */ "5A7i");
/* harmony import */ var _validation_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-container.component.scss */ "oNar");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ValidationContainerComponent = class ValidationContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ValidationContainerComponent.ctorParameters = () => [];
ValidationContainerComponent.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ValidationContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-validation-container',
        template: _raw_loader_validation_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_validation_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ValidationContainerComponent);



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
            { path: 'usuarios',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios-lista/usuarios-lista.module */ "9XuG")).then(m => m.UsuariosListaPageModule)
            },
            { path: 'usuarios/novo',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios-form/usuarios-form.module */ "XbNj")).then(m => m.UsuariosFormPageModule)
            },
            { path: 'usuarios/editar/:key',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios-form/usuarios-form.module */ "XbNj")).then(m => m.UsuariosFormPageModule)
            },
            { path: 'estabelecimentos',
                loadChildren: () => Promise.all(/*! import() | estabelecimentos-estabelecimentos-lista-estabelecimentos-lista-module */[__webpack_require__.e("common"), __webpack_require__.e("estabelecimentos-estabelecimentos-lista-estabelecimentos-lista-module")]).then(__webpack_require__.bind(null, /*! ./estabelecimentos/estabelecimentos-lista/estabelecimentos-lista.module */ "37aK")).then(m => m.EstabelecimentosListaPageModule)
            },
            { path: 'estabelecimentos/novo',
                loadChildren: () => Promise.all(/*! import() | estabelecimentos-estabelecimentos-form-estabelecimentos-form-module */[__webpack_require__.e("common"), __webpack_require__.e("estabelecimentos-estabelecimentos-form-estabelecimentos-form-module")]).then(__webpack_require__.bind(null, /*! ./estabelecimentos/estabelecimentos-form/estabelecimentos-form.module */ "Fwdu")).then(m => m.EstabelecimentosFormPageModule)
            },
            { path: 'estabelecimentos/editar/:key',
                loadChildren: () => Promise.all(/*! import() | estabelecimentos-estabelecimentos-form-estabelecimentos-form-module */[__webpack_require__.e("common"), __webpack_require__.e("estabelecimentos-estabelecimentos-form-estabelecimentos-form-module")]).then(__webpack_require__.bind(null, /*! ./estabelecimentos/estabelecimentos-form/estabelecimentos-form.module */ "Fwdu")).then(m => m.EstabelecimentosFormPageModule)
            },
            { path: 'categorias',
                loadChildren: () => Promise.all(/*! import() | categorias-categorias-lista-categorias-lista-module */[__webpack_require__.e("common"), __webpack_require__.e("categorias-categorias-lista-categorias-lista-module")]).then(__webpack_require__.bind(null, /*! ./categorias/categorias-lista/categorias-lista.module */ "iJ+R")).then(m => m.CategoriasListaPageModule)
            },
            { path: 'categorias/novo',
                loadChildren: () => Promise.all(/*! import() | categorias-categorias-form-categorias-form-module */[__webpack_require__.e("common"), __webpack_require__.e("categorias-categorias-form-categorias-form-module")]).then(__webpack_require__.bind(null, /*! ./categorias/categorias-form/categorias-form.module */ "M5Yi")).then(m => m.CategoriasFormPageModule)
            },
            { path: 'categorias/editar/:key',
                loadChildren: () => Promise.all(/*! import() | categorias-categorias-form-categorias-form-module */[__webpack_require__.e("common"), __webpack_require__.e("categorias-categorias-form-categorias-form-module")]).then(__webpack_require__.bind(null, /*! ./categorias/categorias-form/categorias-form.module */ "M5Yi")).then(m => m.CategoriasFormPageModule)
            },
            { path: 'subcategorias',
                loadChildren: () => Promise.all(/*! import() | subcategorias-subcategorias-lista-subcategorias-lista-module */[__webpack_require__.e("common"), __webpack_require__.e("subcategorias-subcategorias-lista-subcategorias-lista-module")]).then(__webpack_require__.bind(null, /*! ./subcategorias/subcategorias-lista/subcategorias-lista.module */ "HrJg")).then(m => m.SubcategoriasListaPageModule)
            },
            { path: 'subcategorias/novo',
                loadChildren: () => Promise.all(/*! import() | subcategorias-subcategorias-form-subcategorias-form-module */[__webpack_require__.e("common"), __webpack_require__.e("subcategorias-subcategorias-form-subcategorias-form-module")]).then(__webpack_require__.bind(null, /*! ./subcategorias/subcategorias-form/subcategorias-form.module */ "O5uu")).then(m => m.SubcategoriasFormPageModule)
            },
            { path: 'subcategorias/editar/:key',
                loadChildren: () => Promise.all(/*! import() | subcategorias-subcategorias-form-subcategorias-form-module */[__webpack_require__.e("common"), __webpack_require__.e("subcategorias-subcategorias-form-subcategorias-form-module")]).then(__webpack_require__.bind(null, /*! ./subcategorias/subcategorias-form/subcategorias-form.module */ "O5uu")).then(m => m.SubcategoriasFormPageModule)
            },
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

/***/ "xIym":
/*!*****************************************************!*\
  !*** ./src/app/core/shared/ionic-mask.directive.ts ***!
  \*****************************************************/
/*! exports provided: IonicMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicMaskDirective", function() { return IonicMaskDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ "tmjD");





let IonicMaskDirective = class IonicMaskDirective extends ngx_mask__WEBPACK_IMPORTED_MODULE_3__["MaskDirective"] {
    constructor(ionDocument, _ionMaskService, _config) {
        super(ionDocument, _ionMaskService, _config);
        this.ionDocument = ionDocument;
        this._ionMaskService = _ionMaskService;
        this._config = _config;
    }
};
IonicMaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: ngx_mask__WEBPACK_IMPORTED_MODULE_3__["MaskService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ngx_mask__WEBPACK_IMPORTED_MODULE_3__["config"],] }] }
];
IonicMaskDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'ion-input[mask]',
        providers: [ngx_mask__WEBPACK_IMPORTED_MODULE_3__["MaskService"]]
    })
], IonicMaskDirective);



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