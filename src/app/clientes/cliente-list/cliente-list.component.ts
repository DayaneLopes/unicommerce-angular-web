import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})

export class ClienteListComponent implements OnInit {

    clientes: Cliente[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clientes = this.activatedRoute.snapshot.data['clientes'];
  }

  load() {
    this.clienteService
      .getList()
      .subscribe(clientes => {
        this.clientes = this.clientes.concat(clientes);
      });
      console.log("ClienteListComponent");
      console.log(this.clientes);
  }
}