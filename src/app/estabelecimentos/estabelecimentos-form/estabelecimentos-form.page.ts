import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../../categorias/shared/categorias.service';
import {ToastService} from '../../core/services/toast.service';
import {EstabelecimentosService} from '../shared/estabelecimentos.service';
import {Observable} from 'rxjs';
import {SubcategoriasService} from '../../subcategorias/shared/subcategorias.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-estabelecimentos-form',
  templateUrl: './estabelecimentos-form.page.html',
  styleUrls: ['./estabelecimentos-form.page.scss'],
})
export class EstabelecimentosFormPage implements OnInit {

  public title = 'Novo Estabelecimento';
  formEstabelecimento: FormGroup;
  key: string;


  private fileLogo: File = null;
  logoUrl: string = '';
  fileLogoPath: string = '';

  private files: File[] = null;
  filesUrl: string[];
  filesPath: string[];


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
    private subcategoriaService: SubcategoriasService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.categorias = this.categoriaService.getAll();

    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      this.title = 'Editar Estabelecimento';
      const subscribe = this.estabelecimentosService.getByKey(key).subscribe((estabelecimento: any) => {
        subscribe.unsubscribe();

        this.key = estabelecimento.key;
        this.formEstabelecimento.setValue({
          nome: estabelecimento.nome,
          logo: '',
          categoriaKey: estabelecimento.categoriaKey,
          subcategoriaKey: estabelecimento.subcategoriaKey,
          // formaPagamento: estabelecimento.formaPagamento
        });

        this.logoUrl = estabelecimento.imagem || '';
        this.fileLogoPath = estabelecimento.filePath || '';
      });
    }
  }

  get nome() { return this.formEstabelecimento.get('nome'); }
  get logo() { return this.formEstabelecimento.get('logo'); }
  get imagem() { return this.formEstabelecimento.get('imagem'); }
  get categoriaKey() { return this.formEstabelecimento.get('categoriaKey'); }
  get categoriaNome() { return this.formEstabelecimento.get('categoriaNome'); }
  get subcategoriaKey() { return this.formEstabelecimento.get('subcategoriaKey'); }
  get subcategoriaNome() { return this.formEstabelecimento.get('subcategoriaNome'); }

  criarFormulario(){
    this.formEstabelecimento = this.formBuilder.group({
      nome: [''],
      logo: [''],
      categoriaKey: [''],
      categoriaNome: [''],
      subcategoriaKey: [''],
      subcategoriaNome: [''],
      imagem: [''],
      // formaPagamento: ['']
    });

    this.fileLogo = null;
    this.logoUrl = '';
    this.fileLogoPath = '';
  }


  uploadLogo(event: any){
    if (event.target.files.length){
      this.fileLogo = event.target.files[0];
      this.formEstabelecimento.get('logo').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result.toString();
      };
      reader.readAsDataURL(this.fileLogo);
    }else{
      this.fileLogo = null;
    }
  }

  removeLogo(){
    if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);

    this.logoUrl = '';
    this.fileLogoPath = '';
  }

  uploadImagem(event: any){
    if (event.target.files.length){
      this.fileLogo = event.target.files[0];
      this.formEstabelecimento.get('logo').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result.toString();
      };
      reader.readAsDataURL(this.fileLogo);
    }else{
      this.fileLogo = null;
    }
  }

  removeImagem(){
    if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);

    this.logoUrl = '';
    this.fileLogoPath = '';
  }


  setCategoriaNome(categoriaKey: string){
    const categ = this.categoriaService.getByKey(categoriaKey).subscribe((categoria: any) => {
      categ.unsubscribe();
      this.setSubcategoriasByCategoria(categoriaKey);
      this.categoriaNome.setValue(categoria.nome);
    });
  }

  setSubcategoriasByCategoria(categoriaKey: string){
    this.subcategorias =  this.subcategoriaService.getByCategoriaKey(categoriaKey);
  }

  setSubcategoriaNome(subcategoriaKey: any){
    const subcateg = this.categoriaService.getByKey(subcategoriaKey).subscribe((subcategoria: any) => {
      subcateg.unsubscribe();
      this.categoriaNome.setValue(subcategoria.nome);
    });
  }


  onSubmit(){
    if (this.formEstabelecimento.valid){
      let result: Promise<{}>;

      if (this.key) {
        result = this.estabelecimentosService.update(this.formEstabelecimento.value, this.key);
      } else {
        result = this.estabelecimentosService.insert(this.formEstabelecimento.value);
      }

      if (this.fileLogo) {
        result.then((key: string) => {
          this.estabelecimentosService.uploadLogo(key, this.fileLogo);
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
