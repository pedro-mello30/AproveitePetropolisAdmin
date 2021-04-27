import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../../categorias/shared/categorias.service';
import {ToastService} from '../../core/services/toast.service';
import {EstabelecimentosService} from '../shared/estabelecimentos.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-estabelecimentos-form',
  templateUrl: './estabelecimentos-form.page.html',
  styleUrls: ['./estabelecimentos-form.page.scss'],
})
export class EstabelecimentosFormPage implements OnInit {

  public title = 'Novo Estabelecimento';
  formEstabelecimento: FormGroup;
  key: string;
  private file: File = null;
  imagemUrl: string = '';
  filePath: string = '';

  categorias: Observable<any[]>;
  subcategorias: Observable<any[]>;
  formaPagamentos = [
    {nome: 'dinheiro', value: 0},
    {nome: 'dinheiro', value: 0},
    {nome: 'dinheiro', value: 0},
    {nome: 'dinheiro', value: 0},
    {nome: 'dinheiro', value: 0},
    ];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private estabelecimentosService: EstabelecimentosService,
    private categoriaService: CategoriasService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.categorias = this.categoriaService.getAll();
    this.subcategorias = this.categoriaService.getAll();

    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      this.title = 'Editar Estabelecimento';
      const subscribe = this.estabelecimentosService.getByKey(key).subscribe((estabelecimento: any) => {
        subscribe.unsubscribe();

        this.key = estabelecimento.key;
        this.formEstabelecimento.setValue({
          nome: estabelecimento.nome,
          imagem: '',
          categoriaKey: estabelecimento.categoriaKey,
          subcategoriaKey: estabelecimento.subcategoriaKey,
          // formaPagamento: estabelecimento.formaPagamento
        });

        this.imagemUrl = estabelecimento.imagem || '';
        this.filePath = estabelecimento.filePath || '';
      });
    }
  }

  get nome() { return this.formEstabelecimento.get('nome'); }
  get imagem() { return this.formEstabelecimento.get('imagem'); }

  criarFormulario(){
    this.formEstabelecimento = this.formBuilder.group({
      nome: [''],
      imagem: [''],
      categoriaKey: [''],
      subcategoriaKey: [''],
      // formaPagamento: ['']
    });

    this.file = null;
    this.imagemUrl = '';
    this.filePath = '';
  }


  uploadImagem(event: any){
    if (event.target.files.length){
      this.file = event.target.files[0];
      this.formEstabelecimento.get('imagem').updateValueAndValidity();
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
    if (this.key) this.estabelecimentosService.removeImg(this.filePath, this.key);

    this.imagemUrl = '';
    this.filePath = '';
  }

  setCategoriaNome(event: any){

  }

  setSubcategoriaNome(event: any){

  }


  onSubmit(){
    if (this.formEstabelecimento.valid){
      let result: Promise<{}>;

      if (this.key) {
        result = this.estabelecimentosService.update(this.formEstabelecimento.value, this.key);
      } else {
        result = this.estabelecimentosService.insert(this.formEstabelecimento.value);
      }

      if (this.file) {
        result.then((key: string) => {
          this.estabelecimentosService.uploadImg(key, this.file);
          this.criarFormulario();
        });
      } else {
        this.criarFormulario();
      }
      this.toast.showSuccess('Estabelecimento salvo');
      this.router.navigate(['/estabelecimentos']);
    }
  }

}
