import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FirebasePath} from '../../core/shared/firebase-path';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EstabelecimentosEnderecosService {
  enderecosRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.enderecosRef = this.db.list(FirebasePath.ESTABELECIMENTOS_ENDERECOS);
  }

  getAll() {
    return this.enderecosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string){
    const path = `${FirebasePath.ESTABELECIMENTOS_ENDERECOS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map( change => {
        return { key: change.payload.key, ...change.payload.val() as {} };
      })
    );
  }

  insert(endereco: any){
    return new Promise(resolve => {
      this.enderecosRef.push(endereco)
        .then((result: any) => resolve(result.key));
    });
  }

  update(key: string, endereco: any){
    return new Promise((resolve, reject) => {
      const enderecoObj = {
        nome: endereco.nome
      };

      this.enderecosRef.update(key, enderecoObj)
        .then(() => resolve(key))
        .catch(() => reject());
    });
  }

  remove(key: string){
    return this.enderecosRef.remove(key);
  }

}
