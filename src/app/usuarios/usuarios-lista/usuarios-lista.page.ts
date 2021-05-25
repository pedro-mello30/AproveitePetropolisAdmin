import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../shared/usuario.service';
import {AuthService} from '../shared/auth.service';
import {Usuario} from '../shared/usuario';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.page.html',
  styleUrls: ['./usuarios-lista.page.scss'],
})
export class UsuariosListaPage implements OnInit {

  // usuarios: Observable<any[]>;
  usuarios: Observable<any[]>;

  constructor(
    private authApiService: AuthService,
    private usuariosService: UsuarioService
  ) { }

  ngOnInit() {
    const user = {
      email : "admin-user-api",
      password : "admin-user-api"
    };
    this.authApiService.login(user.email, user.password);
    this.loadUsuarios();
    console.log(this.usuarios);
  }

  loadUsuarios(){
    const result = this.usuariosService.getAll();
    this.usuarios = from(result);
  }

  remove(){}
}
