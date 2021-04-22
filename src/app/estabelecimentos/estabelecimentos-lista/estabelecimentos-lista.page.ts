import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos-lista',
  templateUrl: './estabelecimentos-lista.page.html',
  styleUrls: ['./estabelecimentos-lista.page.scss'],
})
export class EstabelecimentosListaPage implements OnInit {


  estabelecimentos = [{nome: 'estabelecimentos'}];

  constructor() { }

  ngOnInit() {
  }

  remove(){}

}
