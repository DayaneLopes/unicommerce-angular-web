import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

import { Usuario } from './usuario';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    private userSubject = new BehaviorSubject<Usuario>(null);
    private usuario: string;
    
    constructor(private tokenService: TokenService) {

        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const usuario = jwt_decode(token) as Usuario;
        this.usuario = usuario.login;
        this.userSubject.next(usuario);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUsuario() {
        return this.usuario;
    }
    
}