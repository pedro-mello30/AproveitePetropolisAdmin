import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {finalize, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

  estabelecimentosRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.estabelecimentosRef = this.db.list(FirebasePath.ESTABELECIMENTOS);
  }

  getAll() {
    return this.estabelecimentosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string){
    const path = `${FirebasePath.ESTABELECIMENTOS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map( change => {
        return { key: change.payload.key, ...change.payload.val() as {} };
      })
    );
  }

  insert(estabelecimento: any){
    return new Promise(resolve => {
      this.estabelecimentosRef.push(estabelecimento)
        .then((result: any) => resolve(result.key));
    });
  }

  update(key: string, estabelecimento: any){
    return new Promise((resolve, reject) => {
      const estabelecimentoObj = {
        nome: estabelecimento.nome
      };

      this.estabelecimentosRef.update(key, estabelecimentoObj)
        .then(() => resolve(key))
        .catch(() => reject());
    });
  }

  remove(key: string, filePath: string){
    return this.estabelecimentosRef.remove(key);
    if(filePath)
      this.removeLogo(filePath, key, false);
  }

  uploadLogo(key: string, file: File){
    const filePath = `${FirebasePath.ESTABELECIMENTOS}${key}/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe((url => {
          this.estabelecimentosRef.update(key, {logo: url, fileLogoPath: filePath });
        }));
      })
    ).subscribe();
  }

  removeLogo(filePath: string, key: string, atualizarEstabelecimento: boolean = true) {
    const ref = this.storage.ref(filePath);
    ref.delete();
    if (atualizarEstabelecimento){
      this.estabelecimentosRef.update(key, {logo: '', fileLogoPath: '' });
    }
  }
}
