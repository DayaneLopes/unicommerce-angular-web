import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoListComponent } from './produto-list.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoModule } from '../produto/produto.module';
import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        ProdutoListComponent,
        ProdutosComponent
    ],
    imports: [ 
        CommonModule,
        ProdutoModule,
        CardModule, 
        DarkenOnHoverModule
    ]
})
export class ProdutoListModule {}