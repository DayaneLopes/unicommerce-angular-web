import { NgModule } from '@angular/core';
import { UsuarioModule } from './usuario/usuario.module';

import { CardModule } from '../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { UsuarioFormModule } from './usuario-form/usuario-form.module';
import { UsuarioListModule } from './usuario-list/usuario-list.module';

@NgModule({
    imports: [ 
        UsuarioModule,
        UsuarioListModule,
        UsuarioFormModule,
        DarkenOnHoverModule
    ]
})
export class UsuariosModule {}