import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstabelecimentosListaPageRoutingModule } from './estabelecimentos-lista-routing.module';

import { EstabelecimentosListaPage } from './estabelecimentos-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstabelecimentosListaPageRoutingModule
  ],
  declarations: [EstabelecimentosListaPage]
})
export class EstabelecimentosListaPageModule {}
