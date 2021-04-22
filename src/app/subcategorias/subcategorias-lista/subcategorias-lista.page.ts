import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategorias-lista',
  templateUrl: './subcategorias-lista.page.html',
  styleUrls: ['./subcategorias-lista.page.scss'],
})
export class SubcategoriasListaPage implements OnInit {

  subcategorias = [{nome: 'subcategorias'}];

  constructor() { }

  ngOnInit() {
  }

  remove(){}
}
