import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';

// const firebaseAdmin = require('firebase-admin');
// import {environment} from '../../../environments/environment';
//
// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(environment.adminFirebaseConfig)
// });


@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.page.html',
  styleUrls: ['./usuarios-form.page.scss'],
})
export class UsuariosFormPage implements OnInit {

  public title = 'Novo Usuário';
  formUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioAuthService: UsuarioAuthService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formUsuario = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: ['']
    });
  }

  onSubmit(){}
}
