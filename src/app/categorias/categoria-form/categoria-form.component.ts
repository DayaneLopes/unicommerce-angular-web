import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria/categoria';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  categoria: Categoria = {
    id: 0,
    nome: '',
    ativo: true
  };

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.categoriaService.create(this.categoria).subscribe(
      novaCategoria => {
        this.categoria = novaCategoria;
        console.log('Categoria criada com sucesso:', novaCategoria);
      },
      erro => {
        console.error('Erro ao criar categoria:', erro);
      }
    );
  }


  save() {
    // Validar se o nome da categoria tem pelo menos 2 caracteres
    if (this.categoria.nome && this.categoria.nome.trim().length >= 2) {
      // Atualizar a propriedade 'ativo' para true antes de salvar
      this.categoria.ativo = true;
      
      // Chamar o serviço para salvar a categoria
      this.categoriaService.create(this.categoria).subscribe(
        novaCategoria => {
          console.log('Categoria salva com sucesso:', novaCategoria);
          // Você pode adicionar lógica adicional aqui após salvar a categoria, se necessário.
        },
        erro => {
          console.error('Erro ao salvar categoria:', erro);
        }
      );
    } else {
      console.log('O nome da categoria deve ter pelo menos 2 caracteres.');
    }
  }

}
