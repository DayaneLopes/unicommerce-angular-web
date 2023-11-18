import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarios = this.activatedRoute.snapshot.data['usuarios'];
  }

  load() {
    this.usuarioService
      .getList()
      .subscribe(usuarios => {
        this.usuarios = this.usuarios.concat(usuarios);
      });
  }
}

