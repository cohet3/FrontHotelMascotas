import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '../_modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string = 'http://localhost:8080/clientes';
  clienteCambio = new Subject<Cliente[]>();

  listar():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
  
alta(c1:Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url,c1);
  }
  constructor(private http:HttpClient) { }
}