import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioAuthService} from '../shared/usuario-auth.service';
import {ToastService} from '../../core/services/toast.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioAuthService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get email() { return this.formLogin.get('email'); }
  get senha() { return this.formLogin.get('senha'); }

  criarFormulario() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit(){
    if (this.formLogin.valid){
      this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
        .then(() => {
          this.router.navigate(['/usuarios']);
        })
        .catch((mensagem: string) => {
          this.toast.showError(mensagem);
        });
    }
  }
}
