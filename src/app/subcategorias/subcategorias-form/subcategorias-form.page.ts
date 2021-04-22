import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';

@Component({
  selector: 'app-subcategorias-form',
  templateUrl: './subcategorias-form.page.html',
  styleUrls: ['./subcategorias-form.page.scss'],
})
export class SubcategoriasFormPage implements OnInit {

  public title = 'Nova Subcategoria';
  formSubcategorias: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioAuthService: UsuarioAuthService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formSubcategorias.get('nome'); }

  criarFormulario(){
    this.formSubcategorias = this.formBuilder.group({
      nome: ['']
    });
  }

  onSubmit(){}
}
