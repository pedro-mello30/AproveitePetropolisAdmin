import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosFormPageRoutingModule } from './usuarios-form-routing.module';

import { UsuariosFormPage } from './usuarios-form.page';
import {SharedModule} from '../../core/shared.module';


@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    IonicModule,
    UsuariosFormPageRoutingModule,
  ],
  declarations: [UsuariosFormPage]
})
export class UsuariosFormPageModule {}
