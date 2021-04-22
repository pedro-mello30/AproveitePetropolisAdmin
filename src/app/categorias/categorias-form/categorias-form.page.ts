import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.page.html',
  styleUrls: ['./categorias-form.page.scss'],
})
export class CategoriasFormPage implements OnInit {

  public title = 'Nova Categoria';
  formCategorias: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioAuthService: UsuarioAuthService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formCategorias.get('nome'); }

  criarFormulario(){
    this.formCategorias = this.formBuilder.group({
      nome: [''],
    });
  }

  onSubmit(){}
}
