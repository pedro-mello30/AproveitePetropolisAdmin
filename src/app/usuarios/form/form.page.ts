import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Usuario} from '../shared/usuario';
import {UsuarioService} from '../shared/usuario.service';
import {Categoria} from '../../categorias/shared/categoria';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  tituloDaPagina: string = 'Adicionar Usuario';
  usuario: Usuario = new Usuario();

  @Output()
  onSavedUsuario = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.usuarioService.getById(id).subscribe(usuario =>{
        this.usuario = usuario;
        this.tituloDaPagina = 'Editar Usuario';
      });
    }
  }

  onSubmit(){
    this.usuarioService.save(this.usuario).subscribe(usuario => {
      this.onSavedUsuario.emit(this.usuario);
      this.router.navigateByUrl('usuarios');
    });
  }
  remove(categoria: Categoria){
    this.usuarioService.delete(categoria._id).subscribe(() =>{
    });
  }

}
