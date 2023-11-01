import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ProdutoComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ ProdutoComponent ]
})
export class ProdutoModule { }