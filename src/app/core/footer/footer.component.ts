import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../usuario/usuario.service";
import { Usuario } from "../usuario/usuario";
import { Observable } from "rxjs";


@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    usuario$: Observable<Usuario>;
    constructor(private usuarioService: UsuarioService) {}

    ngOnInit(): void {
        this.usuario$ = this.usuarioService.getUser();
    }
}