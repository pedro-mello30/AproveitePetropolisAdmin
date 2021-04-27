import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EstabelecimentosService} from '../shared/estabelecimentos.service';
import {ToastService} from '../../core/services/toast.service';

@Component({
  selector: 'app-estabelecimentos-lista',
  templateUrl: './estabelecimentos-lista.page.html',
  styleUrls: ['./estabelecimentos-lista.page.scss'],
})
export class EstabelecimentosListaPage implements OnInit {


  estabelecimentos: Observable<any[]>;

  constructor(
    private estabelecimentoService: EstabelecimentosService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.estabelecimentos = this.estabelecimentoService.getAll();
  }

  remove(key: string, filePath: string){
    this.estabelecimentoService.remove(key, filePath);
    this.toast.showSuccess('Estabelecimento removido com sucesso');
  }
}
