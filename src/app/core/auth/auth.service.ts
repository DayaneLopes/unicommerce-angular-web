import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { UsuarioService } from '../usuario/usuario.service';


//const API_URL = 'http://localhost:8080/api';

const API_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient,
      private userService: UsuarioService) { }

  authenticate(login: string, senha: string) {

    return this.http
      .post(API_URL + '/login', { login, senha }, {observe: "response"} )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`User ${login} authenticated with token ${authToken}`)
    }))
      
}
}
