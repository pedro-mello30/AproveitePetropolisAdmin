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
    return this.http.get<Usuario[]>(`${environment.api}/membros`).toPromise();
  }

  getById(id: string){
    return this.http.get<Usuario>(`${environment.api}/membros/${id}`);
  }

  create(usuario: any){
    return this.http.post(`${environment.api}/membros`, usuario);
  }

  update(usuario: any){
    return this.http.put(`${environment.api}/membros/${usuario.uid}`, usuario);
  }

  delete(id: string){
    return this.http.delete(`${environment.api}/membros/${id}`);
  }
}
