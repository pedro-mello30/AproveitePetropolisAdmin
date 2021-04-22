import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelecimentosListaPage } from './estabelecimentos-lista.page';

const routes: Routes = [
  {
    path: '',
    component: EstabelecimentosListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstabelecimentosListaPageRoutingModule {}
