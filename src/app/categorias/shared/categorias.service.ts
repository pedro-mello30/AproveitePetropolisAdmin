import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {finalize, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.categoriasRef = this.db.list(FirebasePath.CATEGORIAS);
  }

  insert(categoria: any){
    return this.save(categoria, null);
  }

  update(categoria: any, key: string){
    return this.save(categoria, key);
  }

  private save(categoria: any, key: string){
    return new Promise((resolve, reject) => {
      const categoriaRef = {
        nome: categoria.nome
      }

      if (key) {
        this.categoriasRef.update(key, categoriaRef)
          .then(() => resolve(key))
          .catch(() => reject());
      } else {
        this.categoriasRef.push(categoriaRef)
          .then((result: any) => resolve(result.key));
      }
    });
  }
  getAll() {
    return this.categoriasRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string) {
    const path = `${FirebasePath.CATEGORIAS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() as {} });
      })
    );
  }

  remove(key: string, filePath: string){
    this.categoriasRef.remove(key);
    if(filePath)
      this.removeImg(filePath, key, false);
  }

  uploadImg(key: string, file: File){
    const filePath = `${FirebasePath.CATEGORIAS}${key}/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url => {
          this.categoriasRef.update(key, {imagem: url, filePath: filePath });
        }))
      })
    ).subscribe();
  }

  removeImg(filePath: string, key: string, atualizarCategoria: boolean = true) {
    const ref = this.storage.ref(filePath);
    ref.delete();
    if (atualizarCategoria){
      this.categoriasRef.update(key, {imagem: '', filePath: '' });
    }
  }
}
