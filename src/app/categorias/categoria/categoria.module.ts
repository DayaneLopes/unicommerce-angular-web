import { NgModule } from '@angular/core';
import { CategoriaComponent } from './categoria.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [CategoriaComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ CategoriaComponent ]
})
export class CategoriaModule { }