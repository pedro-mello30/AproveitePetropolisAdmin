import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Categoria} from '../shared/categoria';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriaService} from '../shared/categoria.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.scss'],
})
export class CategoriasFormComponent implements OnInit {

  tituloDaPagina: string = 'Adicionar Categoria';
  categoria: Categoria = new Categoria();

  @Output()
  onSavedCategoria = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.categoriaService.getById(id).subscribe(categoria =>{
        this.categoria = categoria;
        this.tituloDaPagina = 'Editar Categoria';
      });
    }
  }

  onSubmit(){
    this.categoriaService.save(this.categoria).subscribe(categoria => {
      this.onSavedCategoria.emit(this.categoria);
      this.router.navigateByUrl('categorias');
    });
  }


}
