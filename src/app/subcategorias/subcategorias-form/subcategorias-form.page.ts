import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioAuthService} from '../../login/shared/usuario-auth.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriasService} from '../../categorias/shared/categorias.service';
import {ToastService} from '../../core/services/toast.service';
import {SubcategoriasService} from '../shared/subcategorias.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-subcategorias-form',
  templateUrl: './subcategorias-form.page.html',
  styleUrls: ['./subcategorias-form.page.scss'],
})
export class SubcategoriasFormPage implements OnInit {

  public title = 'Nova Subcategoria';
  formSubcategorias: FormGroup;
  categorias: Observable<any[]>;
  key: string;

  private file: File = null;
  imagemUrl: string = '';
  filePath: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriasService,
    private subcategoriaService: SubcategoriasService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.criarFormulario();
    this.categorias = this.categoriaService.getAll();

    const key = this.route.snapshot.paramMap.get('key');
    if (key){
      this.title = 'Editar Subategoria';
      const subscribe = this.subcategoriaService.getByKey(key).subscribe((subcategoria: any) => {
        subscribe.unsubscribe();

        this.key = subcategoria.key;
        this.formSubcategorias.setValue({
          nome: subcategoria.nome,
          categoriaKey: subcategoria.categoriaKey,
          categoriaNome: subcategoria.categoriaNome,
          imagem: ''
        });

        this.imagemUrl = subcategoria.imagem || '';
        this.filePath = subcategoria.filePath || '';
      });
    }

  }

  get nome() { return this.formSubcategorias.get('nome'); }
  get categoriaKey() { return this.formSubcategorias.get('categoriaKey'); }
  get categoriaNome() { return this.formSubcategorias.get('categoriaNome'); }
  get imagem() { return this.formSubcategorias.get('imagem'); }

  criarFormulario(){
    this.formSubcategorias = this.formBuilder.group({
      nome: [''],
      categoriaKey: [''],
      categoriaNome: [''],
      imagem: ['']
    });

    this.file = null;
    this.imagemUrl = '';
    this.filePath = '';
  }

  setCategoriaNome(categoriaKey: string){
    const categ = this.categoriaService.getByKey(categoriaKey).subscribe((categoria: any) => {
      categ.unsubscribe();
      this.categoriaNome.setValue(categoria.nome);
    });
  }

  uploadImagem(event: any){
    if (event.target.files.length){
      this.file = event.target.files[0];
      this.formSubcategorias.get('imagem').updateValueAndValidity();
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
    if (this.key) this.subcategoriaService.removeImg(this.filePath, this.key);

    this.imagemUrl = '';
    this.filePath = '';
  }

  onSubmit(){
    if (this.formSubcategorias.valid){
      let result: Promise<{}>;

      if (this.key) {
        result = this.subcategoriaService.update(this.formSubcategorias.value, this.key);
      } else {
        result = this.subcategoriaService.insert(this.formSubcategorias.value);
      }

      if (this.file) {
        result.then((key: string) => {
          this.subcategoriaService.uploadImg(key, this.file);
          this.criarFormulario();
        });
      } else {
        this.criarFormulario();
      }
      this.toast.showSuccess('Subcategoria salva');
      this.router.navigate(['/subcategorias']);
    }
  }
}
