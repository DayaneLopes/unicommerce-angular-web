import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListComponent } from './usuario-list.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        UsuarioListComponent,
        UsuariosComponent
    ],
    imports: [ 
        CommonModule,
        UsuarioModule,
        CardModule, 
        DarkenOnHoverModule
    ]
})
export class UsuarioListModule {}