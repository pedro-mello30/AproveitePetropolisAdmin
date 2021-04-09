import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Categoria} from '../shared/categoria';
import {CategoriaService} from '../shared/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements OnInit {

  @Input()
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  onCategoriaDeleted(categoria: Categoria) {
    if (categoria){
      const index = this.categorias.findIndex(
        (categoriaItem) => categoriaItem._id === categoria._id);
      this.categorias.splice(index, 1);
    }
  }

}
