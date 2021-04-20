import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CategoriasModule} from './categorias/categorias.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layout/login-layout/login-layout.component';
import {LoginComponent} from './login/login/login.component';
import {EsqueciSenhaComponent} from './login/esqueci-senha/esqueci-senha.component';
import {SharedModule} from './core/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CategoriasModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
