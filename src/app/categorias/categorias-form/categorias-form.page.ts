import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../shared/categorias.service';
import {ToastService} from '../../core/services/toast.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.page.html',
  styleUrls: ['./categorias-form.page.scss'],
})
export class CategoriasFormPage implements OnInit {

  public title = 'Nova Categoria';
  formCategorias: FormGroup;
  key: string;
  private file: File = null;
  imagemUrl: string = '';
  filePath: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriasService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();

    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      this.title = 'Editar Categoria';
      const subscribe = this.categoriaService.getByKey(key).subscribe((categoria: any) => {
        subscribe.unsubscribe();

        this.key = categoria.key;
        this.formCategorias.setValue({
          nome: categoria.nome,
          imagem: ''
        });

        this.imagemUrl = categoria.imagem || '';
        this.filePath = categoria.filePath || '';
      });
    }
  }

  get nome() { return this.formCategorias.get('nome'); }
  get imagem() { return this.formCategorias.get('imagem'); }

  criarFormulario(){
    this.key = null;
    this.formCategorias = this.formBuilder.group({
      nome: ['', Validators.required],
      imagem: [''],
    });

    this.file = null;
    this.imagemUrl = '';
    this.filePath = '';
  }

  uploadImagem(event: any){
    if (event.target.files.length){
      this.file = event.target.files[0];
      this.formCategorias.get('imagem').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemUrl = reader.result.toString();
      };
      reader.readAsDataURL(this.file);
    }else{
      this.file = null;
    }
  }

  removeImagem(){
    if (this.key) this.categoriaService.removeImg(this.filePath, this.key);

    this.imagemUrl = '';
    this.filePath = '';
  }

  onSubmit(){
    if (this.formCategorias.valid){
      let result: Promise<{}>;

      if (this.key) {
        result = this.categoriaService.update(this.formCategorias.value, this.key);
      } else {
        result = this.categoriaService.insert(this.formCategorias.value);
      }

      if (this.file) {
        result.then((key: string) => {
          this.categoriaService.uploadImg(key, this.file);
          this.criarFormulario();
        });
      } else {
        this.criarFormulario();
      }
      this.toast.showSuccess('Categoria salva');
      this.router.navigate(['/categorias']);
    }
  }
}
