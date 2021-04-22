import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';

@Component({
  selector: 'app-estabelecimentos-form',
  templateUrl: './estabelecimentos-form.page.html',
  styleUrls: ['./estabelecimentos-form.page.scss'],
})
export class EstabelecimentosFormPage implements OnInit {

  public title = 'Novo Estabelecimento';
  formEstabelecimento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioAuthService: UsuarioAuthService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get nome() { return this.formEstabelecimento.get('nome'); }

  criarFormulario(){
    this.formEstabelecimento = this.formBuilder.group({
      nome: [''],
    });
  }

  onSubmit(){}
}
