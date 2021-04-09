import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import {CategoriasFormComponent} from './categorias-form/categorias-form.component';
import {CategoriasListComponent} from './categorias-list/categorias-list.component';
import {CategoriasItemComponent} from './categorias-item/categorias-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [
    CategoriasListComponent,
    CategoriasItemComponent,
    CategoriasFormComponent
  ]
})
export class CategoriasModule {}
