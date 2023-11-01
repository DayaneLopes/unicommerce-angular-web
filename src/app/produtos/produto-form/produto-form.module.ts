import { NgModule } from '@angular/core';
import { ProdutoFormComponent } from './produto-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ProdutoFormComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ ProdutoFormComponent ]
})
export class ProdutoFormModule { }