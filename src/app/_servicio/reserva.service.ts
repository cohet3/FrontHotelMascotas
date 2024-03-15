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

    buscarFecha(fechaEntrada: Date, fechaSalida: Date): Observable<Reserva[]> {
      const url = `http://localhost:8080/reservas/${fechaEntrada}/${fechaSalida}`;
      console.log(url)
      console.log("realiza la llamada?",fechaEntrada)
      console.log("realiza la llamada?",fechaSalida)
      return this.http.get<Reserva[]>(url);
      
    }

    
  }