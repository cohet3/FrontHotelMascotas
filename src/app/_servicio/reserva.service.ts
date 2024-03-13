import { Observable, Subject } from "rxjs";
import { Injectable } from '@angular/core';
import { Reserva } from "../_modelo/reserva";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
  
    private url = 'http://localhost:8080/reservas';
    reservaCambio = new Subject<Reserva[]>();
  
    listar(): Observable<Reserva[]>{
      return this.http.get<Reserva[]>(this.url);
    }
    alta(r:Reserva):Observable<Reserva>{
      return this.http.post<Reserva>(this.url,r);
    }
  
    constructor(private http:HttpClient) {}

    // consultarDisponibilidad(fechaEntrada: Date, fechaSalida: Date): Observable<any> {
    //   const params = new URLSearchParams();
    //   params.append('fechaEntrada', fechaEntrada.toISOString());
    //   params.append('fechaSalida', fechaSalida.toISOString());
    
    //   let urlConParametros = this.url.replace('{fechaEntrada}', fechaEntrada.toISOString());
    //   urlConParametros = urlConParametros.replace('{fechaSalida}', fechaSalida.toISOString());
    
    //   return this.http.get(urlConParametros + '?' + params.toString());
    // }
    buscarFecha(fechaEntrada: string, fechaSalida: string): Observable<Reserva[]> {
      const url = `http://localhost:8080/reservas/${fechaEntrada}/${fechaSalida}`;
      return this.http.get<Reserva[]>(url);
    }

    
  }