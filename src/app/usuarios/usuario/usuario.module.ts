import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario.component';

@NgModule({
    declarations: [UsuarioComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports:  [UsuarioComponent ]
})
export class UsuarioModule { }