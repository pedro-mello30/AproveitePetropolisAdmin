import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Usuario} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(
    private http: HttpClient) {
  }

  getAll(){
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`);
  }

  getById(id: string){
    return this.http.get<Usuario>(`${environment.api}/usuarios/${id}`);
  }

  save(categoria: Usuario){
    if(categoria._id){
      return this.http.put(`${environment.api}/usuarios/${categoria._id}`, categoria);
    }else{
      return this.http.post(`${environment.api}/usuarios`, categoria);
    }
  }

  delete(id: string){
    return this.http.delete(`${environment.api}/usuarios/${id}`);
  }
}
