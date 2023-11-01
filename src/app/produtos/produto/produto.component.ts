import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-produto',
    templateUrl: 'produto.component.html'
})
export class ProdutoComponent {

    @Input() id:number;
    
    @Input() nome:'';

    @Input() preco:number;

    @Input() descricao:'';

    @Input() quantidadeEstoque:number;

    @Input() categoria:number;    
    
}