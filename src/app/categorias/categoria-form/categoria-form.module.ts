import { NgModule } from '@angular/core';
import { CategoriaFormComponent } from './categoria-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [CategoriaFormComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ CategoriaFormComponent ]
})
export class CategoriaFormModule { }