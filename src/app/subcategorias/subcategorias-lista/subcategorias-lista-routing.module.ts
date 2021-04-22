import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriasListaPage } from './subcategorias-lista.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriasListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriasListaPageRoutingModule {}
