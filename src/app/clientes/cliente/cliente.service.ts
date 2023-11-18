import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';



const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ClienteService{

    constructor(private http: HttpClient) {}

    get(id: string) {
        return this.http
            .get<Cliente>(API + 'cliente/' + id);
    }

    getList() {
        return this.http
            .get<Cliente[]>(API + '/cliente/lista');
    }

    listFromClientePaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
    
        return this.http
            .get<Cliente[]>(API + '/cliente/lista', { params });
    }

    create(cliente: Cliente) {
        return this.http
            .post<Cliente>(API + '/cliente', cliente);   
    }

    adicionarCliente(cliente: Cliente): Observable<any> {
        return this.http
        .post<any>(API + '/cliente', cliente );
    }

}
