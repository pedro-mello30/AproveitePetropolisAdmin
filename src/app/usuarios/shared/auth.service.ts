import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IAuthResponse} from './iauth-response';
import {environment} from '../../../environments/environment';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http: HttpClient

  constructor(
    private httpBackend: HttpBackend
  ) {
    this.http = new HttpClient(this.httpBackend);
  }

  async login(email: string, password: string) {
    try {
      const response = await this.http.post<IAuthResponse>(
        `${environment.api}/auth-admin/login`,
        { email, password }).toPromise();

      if (response.access_token) {
        this.setAuthorizationToken(response.access_token);
        return true;
      }

      return false;
    } catch (e) {
      throw new Error(e);
    }
  }

  setAuthorizationToken(token: string){
    localStorage.setItem('token', token);
  }

  removeAuthorizationToken(){
    localStorage.removeItem('token');
  }

  getAuthorizationToken(){
    return localStorage.getItem('token');
  }

  getUser() {
    const token = this.getAuthorizationToken();
    const decoded: any = jwtDecode(token);
    return {
      email: decoded.email,
      nome: decoded.nome,
    };
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token){
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined){
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if(token && !this.isTokenExpired(token)){
      return true;
    }
    return false;
  }

}
