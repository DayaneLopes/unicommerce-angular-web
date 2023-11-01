import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    nome: '',
    cpf:'',
    telefone:'',
    rua:'',
    numero: 0, 
    complemento:'', 
    bairro:'',
    cidade:'', 
    estado:''
  };

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.clienteService.create(this.cliente).subscribe(
      novoCliente => {
        this.cliente = novoCliente;
        console.log('Cliente criada com sucesso:', novoCliente);
      },
      erro => {
        console.error('Erro ao criar cliente:', erro);
      }
    );
  }


  save() {
    // Validar se todos os campos obrigatórios foram preenchidos
    if (this.cliente.nome && this.cliente.nome.trim() !== '' &&
        this.cliente.cpf && this.cliente.cpf.trim() !== '' &&
        this.cliente.telefone && this.cliente.telefone.trim() !== '' &&
        this.cliente.numero && Number.isInteger(this.cliente.numero) && this.cliente.numero > 0) {
  
      // Validar se o número é um inteiro positivo
      if (Number.isInteger(this.cliente.numero) && this.cliente.numero > 0) {
                
        // Chamar o serviço para salvar o cliente
        this.clienteService.create(this.cliente).subscribe(
          novoCliente => {
            console.log('Cliente salvo com sucesso:', novoCliente);
            // Você pode adicionar lógica adicional aqui após salvar o cliente, se necessário.
          },
          erro => {
            console.error('Erro ao salvar cliente:', erro);
          }
        );
      } else {
        console.log('Número deve ser um inteiro positivo.');
      }
    } else {
      console.log('Todos os campos obrigatórios devem ser preenchidos.');
    }
  }
}
