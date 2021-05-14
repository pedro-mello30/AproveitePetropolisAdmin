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
import {EstabelecimentosEnderecosService} from '../shared/estabelecimentos-enderecos.service';
import {EstabelecimentosImagensService} from '../shared/estabelecimentos-imagens.service';

import { NgxViacepService } from "@brunoc/ngx-viacep";
import {DiasTypeEnum} from '../shared/dias.type.enum';
import {FormaPagamentoTypeEnum} from '../shared/forma-pagamento.type.enum';

@Component({
  selector: 'app-estabelecimentos-form',
  templateUrl: './estabelecimentos-form.page.html',
  styleUrls: ['./estabelecimentos-form.page.scss'],
})
export class EstabelecimentosFormPage implements OnInit {

  public title = 'Novo Estabelecimento';

  formEstabelecimento: FormGroup;
  // enderecos: FormArray;

  key: string;

  private fileLogo: File = null;
  logoUrl: string = '';
  fileLogoPath: string = '';

  categorias: Observable<any[]>;
  subcategorias: Observable<any[]>;

  formaPagamentos = [
    {nome: 'Dinheiro', value: FormaPagamentoTypeEnum.Dinheiro},
    {nome: 'Cartão de crédito', value: FormaPagamentoTypeEnum.Credito},
    {nome: 'Cartão de débito', value: FormaPagamentoTypeEnum.Debito},
    {nome: 'Ticket', value: FormaPagamentoTypeEnum.Ticket},
    {nome: 'Pix', value: FormaPagamentoTypeEnum.Pix},
    ];

  dias = [
    {nome: 'Segunda-feira', value: DiasTypeEnum.Segunda},
    {nome: 'Terça-feira', value: DiasTypeEnum.Terca},
    {nome: 'Quarta-feira', value: DiasTypeEnum.Quarta},
    {nome: 'Quinta-feira', value: DiasTypeEnum.Quinta},
    {nome: 'Sexta-feira', value: DiasTypeEnum.Sexta},
    {nome: 'Sábado', value: DiasTypeEnum.Sabado},
    {nome: 'Domingo', value: DiasTypeEnum.Domingo},
  ];

  private files: File[] = [];
  filesUrl: string[] = [];
  filesPath: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private estabelecimentosService: EstabelecimentosService,
    private estabelecimentosImagensService: EstabelecimentosImagensService,
    private estabelecimentosEnderecosService: EstabelecimentosEnderecosService,
    private categoriaService: CategoriasService,
    private subcategoriaService: SubcategoriasService,
    private toast: ToastService,
    private viacep: NgxViacepService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.criarGroupFormLogo();
    this.categorias = this.categoriaService.getAll();

    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      this.title = 'Editar Estabelecimento';
      const subscribe = this.estabelecimentosService.getByKey(key).subscribe((estabelecimento: any) => {
        subscribe.unsubscribe();
        this.key = estabelecimento.key;
        this.formEstabelecimento.patchValue({
          nome: estabelecimento.nome,

          categoriaKey: estabelecimento.categoriaKey,
          categoriaNome: estabelecimento.categoriaNome,
          subcategoriaKey: estabelecimento.subcategoriaKey,
          subcategoriaNome: estabelecimento.subcategoriaNome,

          cnpj: estabelecimento.cnpj,

          contato: {
            telefone: estabelecimento.contato.telefone,
            email: estabelecimento.contato.email,
            site: estabelecimento.contato.site,
            facebook: estabelecimento.contato.facebook,
            instagram: estabelecimento.contato.instagram,
          },

          formasPagamento: estabelecimento.formasPagamento
        });

        const sub = this.estabelecimentosEnderecosService.getByField('estabelecimentoKey', this.key).subscribe((enderecos: any) => {
          sub.unsubscribe();
          var i;
          for (i = 0; i< enderecos.length; i++){
            if (i != 0)
              this.addEndereco();

            this.enderecos.at(i).setValue({
              cep: enderecos[i].cep,
              estado: enderecos[i].estado,
              cidade: enderecos[i].cidade,
              rua: enderecos[i].rua,
              numero: enderecos[i].numero,
              complemento: enderecos[i].complemento
            });
          }
        });

        const subi = this.estabelecimentosImagensService.getByField('estabelecimentoKey', this.key).subscribe((imagens: any) => {
          subi.unsubscribe();
          imagens.forEach((imagem) => {
            this.filesUrl.push(imagem.imagem);
            this.filesPath.push(imagem.filePath);
          });
        });

        this.logoUrl = estabelecimento.logo || '';
        this.fileLogoPath = estabelecimento.fileLogoPath || '';
        this.formEstabelecimento.updateValueAndValidity();

      });
    }
  }

  get nome() { return this.formEstabelecimento.get('nome'); }
  get categoriaNome() { return this.formEstabelecimento.get('categoriaNome'); }
  get categoriaKey() { return this.formEstabelecimento.get('categoriaKey'); }
  get subcategoriaNome() { return this.formEstabelecimento.get('subcategoriaNome'); }
  get subcategoriaKey() { return this.formEstabelecimento.get('subcategoriaKey'); }
  get enderecos() { return this.formEstabelecimento.get('enderecos') as FormArray; }
  get imagens() { return this.formEstabelecimento.get('imagens') as FormArray; }

  criarFormulario(){
    this.formEstabelecimento = this.formBuilder.group({
      nome: ['', Validators.required],
      logo: [''],
      categoriaKey: ['', Validators.required],
      categoriaNome: ['', Validators.required],
      subcategoriaKey: [''],
      subcategoriaNome: [''],
      cnpj: ['', Validators.required],
      contato: this.formBuilder.group({
        telefone: ['', Validators.required],
        // email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        email: ['', [Validators.required, Validators.email]],
        site: [''],
        facebook: [''],
        instagram: [''],
      }),
      enderecos: this.formBuilder.array([ this.criarFormularioEndereco() ]),
      imagens: this.formBuilder.array([ this.criarFormularioImagem() ]),
      formasPagamento: this.formBuilder.array([

      ]),
      horario: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
    });


  }

  criarGroupFormLogo(){
    this.fileLogo = null;
    this.logoUrl = '';
    this.fileLogoPath = '';
  }

  criarFormularioEndereco(): FormGroup{
    return this.formBuilder.group({
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }

  criarFormularioImagem(): FormGroup{
    return this.formBuilder.group({
      imagem: ['']
    });
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

  addEndereco(){
    // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
    this.enderecos.push(this.criarFormularioEndereco());
  }

  removeEndereco(i: number){
    this.enderecos.removeAt(i);
  }

  buscaCEP(i: number){
    // this.enderecos = this.formEstabelecimento.get('enderecos') as FormArray;
    const endereco = this.enderecos.at(i).value;
    this.viacep
      .buscarPorCep(endereco.cep)
      .subscribe((response: any) => {
        console.log(response);
        this.enderecos.at(i).patchValue({
          estado: response.uf,
          cidade: response.localidade,
          rua: response.logradouro,
        });
      });
  }

  uploadImagem(event: any){
    if (event.target.files.length == 1){
      this.files.push(event.target.files[0]);

      this.formEstabelecimento.get('imagens').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.filesUrl.push(reader.result.toString());
      };
      reader.readAsDataURL(this.files[this.files.length-1]);
    }else{
      Array.prototype.forEach.call(event.target.files, file => {
        this.files.push(file);

        this.formEstabelecimento.get('imagens').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.filesUrl.push(reader.result.toString());
        };
        reader.readAsDataURL(this.files[this.files.length-1]);
      });
    }
  }

  removeImagem(i: number, key: string){
    // if (this.key) this.estabelecimentosService.removeLogo(this.fileLogoPath, this.key);

    this.filesUrl.splice(i, 1);
    this.filesPath.splice(i, 1);
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

  onSubmit(){
    if (this.formEstabelecimento.valid){
      let result: Promise<{}>;

      const estabelecimentoObj = this.formEstabelecimento.value;
      estabelecimentoObj.contato

      if (this.key) {
        result = this.estabelecimentosService.update(this.formEstabelecimento.value, this.key);
      } else {
        result = this.estabelecimentosService.insert(this.formEstabelecimento.value);
      }

      const enderecos = this.formEstabelecimento.get('enderecos').value;
      result.then((key: string) => {
        var i;
        for (i = 0; i< enderecos.length; i++){
          enderecos[i].estabelecimentoKey = key;
          this.estabelecimentosEnderecosService.insert(enderecos[i]);
        }
      });


      if (this.fileLogo) {
        result.then((key: string) => {
          this.estabelecimentosService.uploadLogo(key, this.fileLogo);
          this.criarGroupFormLogo();
        });
      }

      if (this.files.length) {
        result.then((key: string) => {
          this.files.forEach(file => this.estabelecimentosImagensService.uploadImg(key, file));
        });
      }

      this.criarFormulario();


      this.toast.showSuccess('Estabelecimento salvo');
      this.router.navigate(['/estabelecimentos']);
    }
  }

}
