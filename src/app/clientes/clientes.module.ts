import { NgModule } from '@angular/core';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

import { ClienteFormModule } from './cliente-form/cliente-form.module';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteListModule } from './cliente-list/cliente-list.module';

@NgModule({
    imports: [
        ClienteFormModule,
        DarkenOnHoverModule,
        ClienteModule,
        ClienteListModule
        
       
    ]
})
export class ClientesModule {}