import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    {nome: 'Dinheiro', value: 0},
    {nome: 'Cartão de crédito', value: 0},
    {nome: 'Cartão de débito', value: 0},
    {nome: 'Ticket', value: 0},
    {nome: 'Pix', value: 0},
    ];

  dias = [
    {nome: 'Segunda-feira', value: 0},
    {nome: 'Terça-feira', value: 0},
    {nome: 'Quarta-feira', value: 0},
    {nome: 'Quinta-feira', value: 0},
    {nome: 'Sexta-feira', value: 0},
    {nome: 'Sábado', value: 0},
    {nome: 'Domingo', value: 0},
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

          cnpj: estabelecimento.cnpj,

          telefone: estabelecimento.telefone,
          email: estabelecimento.email,
          site: estabelecimento.site,
          facebook: estabelecimento.facebook,
          instagram: estabelecimento.instagram,

          cep: estabelecimento.cep,
          estado: estabelecimento.estado,
          cidade: estabelecimento.cidade,
          rua: estabelecimento.rua,
          numero: estabelecimento.numero,
          complemento: estabelecimento.complemento,

          formaPagamento: estabelecimento.formaPagamento
        });

        this.logoUrl = estabelecimento.imagem || '';
        this.fileLogoPath = estabelecimento.filePath || '';
      });
    }
  }

  get nome() { return this.formEstabelecimento.get('nome'); }
  get logo() { return this.formEstabelecimento.get('logo'); }
  get categoriaKey() { return this.formEstabelecimento.get('categoriaKey'); }
  get categoriaNome() { return this.formEstabelecimento.get('categoriaNome'); }
  get subcategoriaKey() { return this.formEstabelecimento.get('subcategoriaKey'); }
  get subcategoriaNome() { return this.formEstabelecimento.get('subcategoriaNome'); }
  get cnpj() { return this.formEstabelecimento.get('cnpj'); }
  get telefone() { return this.formEstabelecimento.get('telefone'); }
  get email() { return this.formEstabelecimento.get('email'); }
  get site() { return this.formEstabelecimento.get('site'); }
  get facebook() { return this.formEstabelecimento.get('facebook'); }
  get instagram() { return this.formEstabelecimento.get('instagram'); }
  get cep() { return this.formEstabelecimento.get('cep'); }
  get estado() { return this.formEstabelecimento.get('estado'); }
  get cidade() { return this.formEstabelecimento.get('cidade'); }
  get rua() { return this.formEstabelecimento.get('rua'); }
  get numero() { return this.formEstabelecimento.get('numero'); }
  get complemento() { return this.formEstabelecimento.get('complemento'); }



  get formasPagamento() { return this.formEstabelecimento.get('formasPagamento') as FormArray; }
  get imagens() { return this.formEstabelecimento.get('imagens') as FormArray; }

  criarFormulario(){
    this.formEstabelecimento = this.formBuilder.group({
      nome: [''],
      logo: [''],
      categoriaKey: [''],
      categoriaNome: [''],
      subcategoriaKey: [''],
      subcategoriaNome: [''],
      cnpj: [''],
      contato: this.formBuilder.group({
        telefone: [''],
        // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        email: [''],
        site: [''],
        facebook: [''],
        instagram: [''],
      }),
      endereco: this.formBuilder.group({
        cep: [''],
        estado: [''],
        cidade: [''],
        rua: [''],
        numero: [''],
        complemento: ['']
      }),
      imagens: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      formasPagamento: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      horario: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
    });

    this.fileLogo = null;
    this.logoUrl = '';
    this.fileLogoPath = '';
  }

  onCheckHorarioChange(event) {
    const formArray: FormArray = this.formEstabelecimento.get('formasPagamento') as FormArray;

    if (event.target.checked) {
      formArray.push(this.formBuilder.control(event.target.value));
    }else{
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
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

  setSubcategoriaNome(subcategoriaKey: string){
    const subcateg = this.subcategoriaService.getByKey(subcategoriaKey).subscribe((subcategoria: any) => {
      subcateg.unsubscribe();
      this.subcategoriaNome.setValue(subcategoria.nome);
    });
  }


  onSubmit(){
    if (this.formEstabelecimento.valid){
      let result: Promise<{}>;

      if (this.key) {
        result = this.estabelecimentosService.update(this.formEstabelecimento.value, this.key);
      } else {
        console.log(this.formEstabelecimento.value);
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
