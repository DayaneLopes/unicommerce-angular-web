import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NovoUsuario } from './novo-usuario.';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit{
    
    signupForm: FormGroup;
    @ViewChild('loginInput') loginInput: ElementRef<HTMLInputElement>

    constructor(private formBuilder: FormBuilder,
                private userNotTakenValidatorService: UserNotTakenValidatorService,
                private signUpService: SignUpService,
                private router: Router,
                private platformDetectorService: PlatformDetectorService) {}
    
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
         login: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            senha: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });

        this.platformDetectorService.isPlatformBrowser() &&
        this.loginInput.nativeElement.focus();
    }

    signup(){
        const novoUsuario = this.signupForm.getRawValue() as NovoUsuario;
        this.signUpService.signup(novoUsuario)
                    .subscribe(() => this.router.navigate(['']));
    }

}