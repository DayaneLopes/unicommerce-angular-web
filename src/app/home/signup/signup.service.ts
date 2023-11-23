import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario.';

const API_URL = "http://localhost:8080/api";

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(login: string) {

        return this.http.get(API_URL + '/usuario/existe/' + login);
    }

    signup(novoUsuario: NovoUsuario) {
        return this.http.post(API_URL + '/usuario/signup', novoUsuario);
    }
}