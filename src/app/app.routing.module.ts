import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteListResolver } from './clientes/cliente-list/cliente-list.resolver';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoListResolver } from './produtos/produto-list/produto-list.resolver';
import { SignInComponent } from './home/signin/signin.component';

const routes: Routes = [
    { 
        path: '', 
        component: SignInComponent 
    },
    { 
        path: 'user/:userName', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    { 
        path: 'p/add', 
        component: PhotoFormComponent 
    },
    { 
        path: 'categoria/lista', 
        component: CategoriaListComponent,
        resolve: {
            photos: CategoriaListResolver
        } 
    },
    { 
        path: 'categoria', 
        component: CategoriaFormComponent
    },
    { 
        path: 'cliente', 
        component: ClienteFormComponent
    },
    {
        path: 'cliente/lista', 
        component: ClienteListComponent,
        resolve: {
            photos: ClienteListResolver
        } 
    },
    { 
        path: 'produto', 
        component: ProdutoFormComponent
    },
    {
        path: 'produto/lista', 
        component: ProdutoListComponent,
        resolve: {
            photos: ProdutoListResolver
        } 
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    },
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

