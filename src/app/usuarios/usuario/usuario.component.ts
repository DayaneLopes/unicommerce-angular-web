import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-usuario',
    templateUrl: 'usuario.component.html'
})
export class UsuarioComponent {

    @Input() id:number;
    
    @Input() login:'';

    @Input() senha:'';
    
    
}