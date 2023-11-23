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
import { LoginGuard } from './core/auth/login.guard';
import { SignUpComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth/auth.guard';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { MenuComponent } from './menu/menu.component';
//import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
//import { UsuarioListResolver } from './usuarios/usuario-list/usuario-list.resolver';

const routes: Routes = [

    //{
       // path: 'home',
       // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
   // },
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
            },
            {
                path: 'signup',
                component: SignUpComponent,
            },
        ]
    },
    {
        path: 'menu', 
        component: MenuComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'usuario', 
        component: UsuarioFormComponent,
        canActivate: [AuthGuard]
    },
    //{ 
       // path: 'usuario/lista', 
      //  component: UsuarioListComponent,
      //  resolve: {
      //      usuarios: UsuarioListResolver
      //  },
      //  canActivate: [AuthGuard]
   // },
    { 
        path: 'categoria/lista', 
        component: CategoriaListComponent,
        resolve: {
            categorias: CategoriaListResolver
        },
        canActivate: [AuthGuard]
    },
    { 
        path: 'categoria', 
        component: CategoriaFormComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'cliente', 
        component: ClienteFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'cliente/lista', 
        component: ClienteListComponent,
        resolve: {
            clientes: ClienteListResolver
        },
        canActivate: [AuthGuard]
    },
    { 
        path: 'produto', 
        component: ProdutoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'produto/lista', 
        component: ProdutoListComponent,
        resolve: {
            produtos: ProdutoListResolver
        }, 
        canActivate: [AuthGuard]
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

