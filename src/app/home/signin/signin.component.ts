import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})

export class SignInComponent implements OnInit{

  
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
              private authService:  AuthService,
              private router: Router,
              private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['',  Validators.required]
    });
    this.platformDetectorService.isPlatformBrowser() &&
                  this.userNameInput.nativeElement.focus();
  }

  login(){
    const login = this.loginForm.get('login').value;
    const senha = this.loginForm.get('senha').value;

    this.authService
        .authenticate(login, senha)
        .subscribe(
            () => this.router.navigate(['cliente/lista']),
            err => {
                console.log(err);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() &&
                  this.userNameInput.nativeElement.focus();
                alert('Senha ou usuário incorreto');
            }
        );
  }

  
}