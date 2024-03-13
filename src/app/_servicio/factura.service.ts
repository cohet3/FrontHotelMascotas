import { Injectable } from '@angular/core';
import { Factura } from '../_modelo/factura';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FacturaService{
  
  private url:string = 'http://localhost:8080/Factura'; //conectar con el back
  
  FacturaCambio = new Subject<Factura[]>(); 

  listar(): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.url);
  }

  alta(f:Factura):Observable<Factura>{
    return this.http.post<Factura>(this.url,f);
  }

  constructor(private http:HttpClient) {}
}