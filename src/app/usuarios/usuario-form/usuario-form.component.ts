import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarioForm: FormGroup;
  @ViewChild('#usuarioLoginInput') usuarioLoginInput: ElementRef<HTMLInputElement>;
   usuario: Usuario;

  constructor(
      private formBuilder: FormBuilder,
      private usuarioService: UsuarioService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
      this.usuarioForm = this.formBuilder.group({
          nome: ['', Validators.required],
          status: ['', Validators.required]
      });
  }

  addCategoria() {
      this.usuario = this.usuarioForm.value;
      
      this.usuarioService
          .adicionarUsuario(this.usuario)
          .subscribe(
              //() => this.router.navigateByUrl('categoria/lista'),
              //() => this.router.navigate(['user', userName]),
              err => {
                  console.log(err);
                  this.usuarioForm.reset();
                  this.platformDetectorService.isPlatformBrowser() &&
                  this.usuarioLoginInput.nativeElement.focus();
                  alert('Dados invalidos para o usuario')
              }
        ); 

  }

  voltarParaMenu() {
    this.router.navigate(['/menu']);
  }
  
}
