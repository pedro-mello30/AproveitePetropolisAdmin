import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFormPage } from './categorias-form.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasFormPageRoutingModule {}
