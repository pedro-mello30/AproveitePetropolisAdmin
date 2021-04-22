import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CategoriasService} from '../shared/categorias.service';
import {ToastService} from '../../core/services/toast.service';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.page.html',
  styleUrls: ['./categorias-lista.page.scss'],
})
export class CategoriasListaPage implements OnInit {

  categorias: Observable<any[]>;

  constructor(
    private categoriasService: CategoriasService,
    private toast: ToastService
  ) {}

  ngOnInit() {
      this.categorias = this.categoriasService.getAll();
  }

  remove(key: string, filePath: string){
    this.categoriasService.remove(key, filePath);
    this.toast.showSuccess('Categoria removida')
  }
}
