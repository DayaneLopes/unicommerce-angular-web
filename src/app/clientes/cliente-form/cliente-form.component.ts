import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'ap-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;
  @ViewChild('#clienteNomeInput') clienteNomeInput: ElementRef<HTMLInputElement>;
  cliente: Cliente;

  constructor(
      private formBuilder: FormBuilder,
      private clienteService: ClienteService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
      this.clienteForm = this.formBuilder.group({
          nome: ['', Validators.required],
          status: ['', Validators.required]
      });
  }

  addCliente() {
      this.cliente = this.clienteForm.value;
      
      this.clienteService
          .adicionarCliente(this.cliente)
          .subscribe(
              //() => this.router.navigateByUrl('cliente/lista'),
              //() => this.router.navigate(['user', userName]),
              err => {
                  console.log(err);
                  this.clienteForm.reset();
                  this.platformDetectorService.isPlatformBrowser() &&
                  this.clienteNomeInput.nativeElement.focus();
                  alert('Dados invalidos para o cliente')
              }
        ); 

  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }
}
