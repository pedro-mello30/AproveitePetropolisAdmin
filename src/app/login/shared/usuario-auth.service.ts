import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import {FirebasePath} from '../../core/shared/firebase-path';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAuthService {

  constructor(private afAuth: AngularFireAuth) { }

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


  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          resolve();
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }

  logout() {
    return this.afAuth.signOut();
  }

  enviarEmailResetarSenha(email: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(email)
        .then(() => {
          resolve();
        })
        .catch((error: any) => {
          reject(this.handlerError(error));
        });
    });
  }


  handlerError(error: any) {
    let mensagem = '';
    if (error.code == 'auth/email-already-in-use') {
      mensagem = 'O e-mail informado já está sendo usado.';
    } else if (error.code == 'auth/invalid-email') {
      mensagem = 'O e-mail informado é inválido.';
    } else if (error.code == 'auth/operation-not-allowed') {
      mensagem = 'A autenticação por email e senha não está habilitada';
    } else if (error.code == 'auth/weak-password') {
      mensagem = 'A senha utilizada é muito fraca. Por favor escolha outra senha.';
    } else if (error.code == 'auth/user-disabled') {
      mensagem = 'O usuário está desabilitado, por favor contact o administrador.';
    } else if (error.code == 'auth/user-not-found' || error.code == 'auth/wrong-password') {
      mensagem = 'O usuario/senha inválido(s)';
    }

    return mensagem;
  }

  // updateProfile(values: any) {
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.currentUser.updateProfile({ displayName: values.nome, photoURL: this.afAuth.currentUser.photoURL });
  //
  //     const path = `${FirebasePath.USUARIOS}${this.afAuth}`
  //     this.db.object(path).update({ telefone: values.telefone, cpf: values.cpf })
  //       .then(() => resolve())
  //       .catch(() => reject());
  //   });
  // }
}
