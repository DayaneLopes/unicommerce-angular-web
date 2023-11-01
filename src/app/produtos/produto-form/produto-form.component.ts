import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { CategoriaService } from 'src/app/categorias/categoria/categoria.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto = {
    id:0,
    nome: '',
    preco: 0,
    descricao: '',
    quantidadeEstoque: 0,
    categoria: 0
  };

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.produtoService.create(this.produto).subscribe(
      novoProduto => {
        this.produto = novoProduto;
        console.log('Produto criado com sucesso:', novoProduto);
      },
      erro => {
        console.error('Erro ao criar produto:', erro);
      }
    );
  }

  
  save() {
    // Validar se os campos obrigatórios (nome, preço, categoriaId) foram preenchidos
    if (
      this.produto.nome && this.produto.nome.trim() !== '' &&
      this.produto.preco > 0 &&
      this.produto.categoria > 0
    ) {
      // Validar se o preço é positivo
      if (this.produto.preco <= 0) {
        console.log('O preço deve ser positivo.');
        return;
      }

      // Validar se o ID da categoria é válido (simulando a validação com CategoriaService.getCategoriaPorId)
      this.categoriaService.getCategoriaPorId(this.produto.categoria).subscribe(
        categoria => {
          // Se o ID da categoria for válido, definir o produto como ativo e chamar o serviço para salvar
          this.produtoService.create(this.produto).subscribe(
            novoProduto => {
              console.log('Produto salvo com sucesso:', novoProduto);
              // Você pode adicionar lógica adicional aqui após salvar o produto, se necessário.
            },
            erro => {
              console.error('Erro ao salvar produto:', erro);
            }
          );
        },
        erro => {
          console.log('ID da categoria inválido.');
        }
      );
    } else {
      console.log('Nome, preço e categoria são campos obrigatórios.');
    }
  }


  


}
