import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SubcategoriasService} from '../shared/subcategorias.service';
import {ToastService} from '../../core/services/toast.service';

@Component({
  selector: 'app-subcategorias-lista',
  templateUrl: './subcategorias-lista.page.html',
  styleUrls: ['./subcategorias-lista.page.scss'],
})
export class SubcategoriasListaPage implements OnInit {

  subcategorias: Observable<any[]>;

  constructor(
    private subcategoriaService: SubcategoriasService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.subcategorias = this.subcategoriaService.getAll();
  }

  remove(key: string, filePath: string){
    this.subcategoriaService.remove(key, filePath);
    this.toast.showSuccess('Subcategoria removida');
  }
}
