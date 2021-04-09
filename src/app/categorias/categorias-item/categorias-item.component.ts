import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriaService} from '../shared/categoria.service';
import {Categoria} from '../shared/categoria';

@Component({
  selector: 'app-categorias-item',
  templateUrl: './categorias-item.component.html',
  styleUrls: ['./categorias-item.component.scss'],
})
export class CategoriasItemComponent implements OnInit {

  @Input()
  categoria: Categoria;

  @Output()
  onDeleteCategoria = new EventEmitter();


  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {}

  remove(categoria: Categoria){
    this.categoriaService.delete(categoria._id).subscribe(() =>{
      this.onDeleteCategoria.emit(categoria);
    });
  }
}
