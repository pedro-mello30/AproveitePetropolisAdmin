import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';
import {UsuarioService} from '../shared/usuario.service';
import {ToastService} from '../../core/services/toast.service';
import {ActivatedRoute, Router} from '@angular/router';

// const firebaseAdmin = require('firebase-admin');
// import {environment} from '../../../environments/environment';
//
// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(environment.adminFirebaseConfig)
// });


@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.page.html',
  styleUrls: ['./usuarios-form.page.scss'],
})
export class UsuariosFormPage implements OnInit {

  public title = 'Novo Usuário';
  key: string = null;
  formUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {

    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      this.key = key;
      this.criarFormulario('edit');
      this.title = "Editar Usuário";
      const sub = this.usuariosService.getById(key).subscribe((usuario: any) => {
        sub.unsubscribe();

        this.key = usuario.uid;
        this.formUsuario.patchValue({
          nome: usuario.displayName,
          email: usuario.email
        });
      });
    }else{
      this.criarFormulario('new');
    }
    console.log(this.key);
  }

  criarFormulario(type: string){
    if(type === 'new'){
      this.formUsuario = this.formBuilder.group({
        nome: [''],
        email: [''],
        password: ['']
      });
    }else if(type === 'edit'){
      this.formUsuario = this.formBuilder.group({
        nome: [''],
        email: [''],
      });
    }
  }

  onSubmit(){
    if (this.formUsuario.valid) {
      const formUser = this.formUsuario.value;
      this.save(formUser);
      this.toast.showSuccess('Membro salvo com sucesso');
      this.router.navigate(['/usuarios']);
    }
  }

  save(user: any){
    if (this.key === null){
      const newUser = {
        nome: user.nome,
        email: user.email,
        password: user.password
      };
      this.usuariosService.create(newUser).subscribe();
    }else{
      const updateUser =  {
          uid: this.key,
          nome: user.nome,
          email: user.email,
        };
      this.usuariosService.update(updateUser).subscribe();
    }

  }
}
