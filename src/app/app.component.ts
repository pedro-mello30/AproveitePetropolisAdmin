import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Usuários', url: '/usuarios', icon: 'people' },
    { title: 'Estabelecimentos', url: '/estabelecimentos', icon: 'storefront' },
    { title: 'Categorias', url: '/categorias', icon: 'grid' },
  ];
  constructor() {}
}
