import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CategoriasListComponent} from './categorias/categorias-list/categorias-list.component';
import {CategoriasFormComponent} from './categorias/categorias-form/categorias-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'estabelecimentos',
    loadChildren: () => import('./estabelecimentos/estabelecimentos.module').then( m => m.EstabelecimentosPageModule)
  },
  {
    path: 'categorias',
    component: CategoriasListComponent
  },

  {
    path: 'categorias/editar/:id',
    component: CategoriasFormComponent
  },
  {
    path: 'categorias/adicionar',
    component: CategoriasFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
