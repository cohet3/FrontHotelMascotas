import { Observable, Subject } from "rxjs";
import { Injectable } from '@angular/core';
import { Reserva } from "../_modelo/reserva";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
  
    private url: string = 'http://localhost:8080/reservas';//conectar intelillnt
    reservaCambio = new Subject<Reserva[]>();
  
    listar(): Observable<Reserva[]>{
      return this.http.get<Reserva[]>(this.url);
    }
  
    alta(r:Reserva):Observable<Reserva>{
      return this.http.post<Reserva>(this.url,r);
    }
  
    constructor(private http:HttpClient) {}
  }