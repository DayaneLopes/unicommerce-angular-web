import { NgModule } from '@angular/core';
import { UsuarioFormComponent } from './usuario-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        UsuarioFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        VMessageModule,
        ReactiveFormsModule,
        RouterModule 
    ],
    exports: [ UsuarioFormComponent ]
})
export class UsuarioFormModule { }