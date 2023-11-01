import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-categoria',
    templateUrl: 'categoria.component.html'
})
export class CategoriaComponent {

    @Input() id:number;
    
    @Input() nome:'';

    @Input() ativo:boolean;
    
    
}