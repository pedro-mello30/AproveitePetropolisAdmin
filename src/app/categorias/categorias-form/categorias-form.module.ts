import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasFormPageRoutingModule } from './categorias-form-routing.module';

import { CategoriasFormPage } from './categorias-form.page';
import {SharedModule} from '../../core/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CategoriasFormPageRoutingModule
  ],
  declarations: [CategoriasFormPage]
})
export class CategoriasFormPageModule {}
