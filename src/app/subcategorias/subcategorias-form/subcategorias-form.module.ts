import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoriasFormPageRoutingModule } from './subcategorias-form-routing.module';

import { SubcategoriasFormPage } from './subcategorias-form.page';
import {SharedModule} from '../../core/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SubcategoriasFormPageRoutingModule
  ],
  declarations: [SubcategoriasFormPage]
})
export class SubcategoriasFormPageModule {}
