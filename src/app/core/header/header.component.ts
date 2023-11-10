import { Component } from "@angular/core";
import { Usuario } from "../usuario/usuario";
import { UsuarioService } from "../usuario/usuario.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'ap-header', 
    templateUrl: './header.component.html'
})

export class HeaderComponet {

    user$: Observable<Usuario>;
  

    constructor(private usuarioService: UsuarioService, 
                        private router: Router) {
        this.user$ = usuarioService.getUser();
       
    }

    
logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
}
    
}