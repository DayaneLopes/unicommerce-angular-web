import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-cliente',
    templateUrl: 'cliente.component.html'
})
export class ClienteComponent {

    @Input() id:number;
    
    @Input() nome:'';

    @Input() cpf:'';
    
    @Input() telefone:'';

    @Input() rua:'';

    @Input() numero:number;

    @Input() complemento:'';

    @Input() bairro:'';

    @Input() cidade:'';

    @Input() estado:'';
}