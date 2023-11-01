import { NgModule } from '@angular/core';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaListModule } from './categoria-list/categoria-list.module';
import { CardModule } from '../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CategoriaFormModule } from './categoria-form/categoria-form.module';

@NgModule({
    imports: [ 
        CategoriaModule,
        CategoriaListModule,
        CategoriaFormModule,
        DarkenOnHoverModule
    ]
})
export class CategoriasModule {}