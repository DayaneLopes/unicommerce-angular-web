import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';



const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ClienteService {

    constructor(private http: HttpClient) {}

    get(id: string) {
        console.log("get:id");
        return this.http
            .get<Cliente>(API + '/cliente/' + id);       
    }

    getList() {
        console.log("getList");
        return this.http
            .get<Cliente[]>(API + '/cliente/lista');   
    }

    create(cliente : Cliente){
        return this.http.post<Cliente>(API + '/cliente', cliente);
    }

      
}
