import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.page.html',
  styleUrls: ['./usuarios-lista.page.scss'],
})
export class UsuariosListaPage implements OnInit {

  usuarios = [
    {nome: 'Usuário'}
  ];
  constructor() { }

  ngOnInit() {
  }

  remove(){}
}
