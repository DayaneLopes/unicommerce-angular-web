import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Categoria } from "./categoria";

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class CategoriaService {

    constructor(private http: HttpClient) {}

    get(id: string) {
        console.log("get:id");
        return this.http
            .get<Categoria>(API + '/categoria/' + id);       
    }

    getList() {
        console.log("getList");
        return this.http
            .get<Categoria[]>(API + '/categoria/lista');   
    }


    create(categoria : Categoria){
        return this.http.post<Categoria>(API + '/categoria', categoria);
    }

    
    getCategoriaPorId(categoriaId: number) {
     
        
    }
      
}
