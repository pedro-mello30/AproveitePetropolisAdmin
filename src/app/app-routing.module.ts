import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layout/login-layout/login-layout.component';
import {LoginComponent} from './login/login/login.component';
import {EsqueciSenhaComponent} from './login/esqueci-senha/esqueci-senha.component';
import {AuthGuard} from './login/shared/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios-lista/usuarios-lista.module').then( m => m.UsuariosListaPageModule)
      },
      { path: 'usuarios/novo',
        loadChildren: () => import('./usuarios/usuarios-form/usuarios-form.module').then( m => m.UsuariosFormPageModule)
      },
      { path: 'usuarios/editar/:key',
        loadChildren: () => import('./usuarios/usuarios-form/usuarios-form.module').then( m => m.UsuariosFormPageModule)
      },

      { path: 'estabelecimentos',
        loadChildren: () => import('./estabelecimentos/estabelecimentos-lista/estabelecimentos-lista.module').then( m => m.EstabelecimentosListaPageModule)
      },
      { path: 'estabelecimentos/novo',
        loadChildren: () => import('./estabelecimentos/estabelecimentos-form/estabelecimentos-form.module').then( m => m.EstabelecimentosFormPageModule)
      },
      { path: 'estabelecimentos/editar/:key',
        loadChildren: () => import('./estabelecimentos/estabelecimentos-form/estabelecimentos-form.module').then( m => m.EstabelecimentosFormPageModule)
      },

      { path: 'categorias',
        loadChildren: () => import('./categorias/categorias-lista/categorias-lista.module').then( m => m.CategoriasListaPageModule)
      },
      { path: 'categorias/novo',
        loadChildren: () => import('./categorias/categorias-form/categorias-form.module').then( m => m.CategoriasFormPageModule)
      },
      { path: 'categorias/editar/:key',
        loadChildren: () => import('./categorias/categorias-form/categorias-form.module').then( m => m.CategoriasFormPageModule)
      },

      { path: 'subcategorias',
        loadChildren: () => import('./subcategorias/subcategorias-lista/subcategorias-lista.module').then( m => m.SubcategoriasListaPageModule)
      },
      { path: 'subcategorias/novo',
        loadChildren: () => import('./subcategorias/subcategorias-form/subcategorias-form.module').then( m => m.SubcategoriasFormPageModule)
      },
      { path: 'subcategorias/editar/:key',
        loadChildren: () => import('./subcategorias/subcategorias-form/subcategorias-form.module').then( m => m.SubcategoriasFormPageModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '',  component: LoginComponent },
      { path: 'esqueci-senha',  component: EsqueciSenhaComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
