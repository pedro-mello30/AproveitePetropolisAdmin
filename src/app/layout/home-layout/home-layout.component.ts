import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {

  public appPages = [
    { title: 'Usuários', url: '/usuarios', icon: 'people' },
    { title: 'Estabelecimentos', url: '/estabelecimentos', icon: 'storefront' },
    { title: 'Categorias', url: '/categorias', icon: 'grid' },
    { title: 'Subcategorias', url: '/subcategorias', icon: 'grid' },
  ];


  constructor(private usuarioAuthService: UsuarioAuthService, private router: Router) { }

  ngOnInit() {}

  logout(){
    this.usuarioAuthService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
