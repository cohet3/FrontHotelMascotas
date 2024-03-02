import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Servicio } from "../_modelo/servicio";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ServicioService {
    private url:string= 'http://localhost:8080/servicios';
    servicioCambio= new Subject<Servicio[]>();
    
    listar(): Observable<Servicio[]>{
        return this.http.get<Servicio[]>(this.url);
      }
      constructor(private http:HttpClient) { }
}