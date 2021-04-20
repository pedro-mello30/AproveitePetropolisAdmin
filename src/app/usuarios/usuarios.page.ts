import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from './shared/usuario';
import {UsuarioService} from './shared/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  @Input()
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  onCategoriaDeleted(usuario: Usuario) {
    if (usuario){
      const index = this.usuarios.findIndex(
        (usuarioItem) => usuarioItem._id === usuario._id);
      this.usuarios.splice(index, 1);
    }
  }

}
