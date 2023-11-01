import { NgModule } from '@angular/core';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoListModule } from './produto-list/produto-list.module';
import { CardModule } from '../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { ProdutoFormModule } from './produto-form/produto-form.module';

@NgModule({
    imports: [ 
        ProdutoModule,
        ProdutoListModule,
        ProdutoFormModule,
        DarkenOnHoverModule
    ]
})
export class ProdutosModule {}