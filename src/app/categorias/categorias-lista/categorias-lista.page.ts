import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.page.html',
  styleUrls: ['./categorias-lista.page.scss'],
})
export class CategoriasListaPage implements OnInit {

  categorias = [{nome: 'categorias'}];

  constructor() { }

  ngOnInit() {
  }

  remove(){}
}
