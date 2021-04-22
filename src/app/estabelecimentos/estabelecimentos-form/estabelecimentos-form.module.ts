import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentosFormPageRoutingModule } from './estabelecimentos-form-routing.module';

import { EstabelecimentosFormPage } from './estabelecimentos-form.page';
import {SharedModule} from '../../core/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EstabelecimentosFormPageRoutingModule
  ],
  declarations: [EstabelecimentosFormPage]
})
export class EstabelecimentosFormPageModule {}
