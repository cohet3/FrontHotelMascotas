import { Injectable } from '@angular/core';
import { detalleFactura } from '../_modelo/detalleFactura';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {

  constructor(private http:HttpClient){}
  private url:string = 'http://localhost:8080/detalleFactura';
  
  detalleFacturaCambio = new Subject<detalleFactura[]>();

  listar1(id:number):Observable<detalleFactura>{
    return this.http.get<detalleFactura>(`${this.url}/${id}`);
  }
}
