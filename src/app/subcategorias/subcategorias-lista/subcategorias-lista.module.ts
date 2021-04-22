import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoriasListaPageRoutingModule } from './subcategorias-lista-routing.module';

import { SubcategoriasListaPage } from './subcategorias-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcategoriasListaPageRoutingModule
  ],
  declarations: [SubcategoriasListaPage]
})
export class SubcategoriasListaPageModule {}
