import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layout/login-layout/login-layout.component';
import {LoginComponent} from './login/login/login.component';
import {EsqueciSenhaComponent} from './login/esqueci-senha/esqueci-senha.component';
import {SharedModule} from './core/shared.module';
import {UsuariosFormPageModule} from './usuarios/usuarios-form/usuarios-form.module';
import {UsuariosListaPageModule} from './usuarios/usuarios-lista/usuarios-lista.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { NgxViacepModule } from "@brunoc/ngx-viacep";

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    EsqueciSenhaComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    UsuariosFormPageModule,
    UsuariosListaPageModule,
    NgxViacepModule,

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
