import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from "./produto";

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ProdutoService {

    constructor(private http: HttpClient) {}

    get(id: string) {
        console.log("get:id");
        return this.http
            .get<Produto>(API + '/produto/' + id);       
    }

    getList() {
        console.log("getList");
        return this.http
            .get<Produto[]>(API + '/produto/lista');   
    }

    create(produto : Produto){
        return this.http.post<Produto>(API + '/produto', produto);
    }


      
}
