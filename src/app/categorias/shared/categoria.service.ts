import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from './categoria';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient) {
  }

  getAll(){
    return this.http.get<Categoria[]>(`${environment.api}/categorias`);
  }

  getById(id: string){
    return this.http.get<Categoria>(`${environment.api}/categorias/${id}`);
  }

  save(categoria: Categoria){
    if(categoria._id){
      return this.http.put(`${environment.api}/categorias/${categoria._id}`, categoria);
    }else{
      return this.http.post(`${environment.api}/categorias`, categoria);
    }
  }

  delete(id: string){
    return this.http.delete(`${environment.api}/categorias/${id}`);
  }
}
