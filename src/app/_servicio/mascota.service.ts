import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../_modelo/mascota';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private url: string = 'http://localhost:8080/mascotas';//conectar intelillnt
  mascotaCambio = new Subject<Mascota[]>();

  listar(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(this.url);
  }

  alta(m:Mascota):Observable<Mascota>{
    return this.http.post<Mascota>(this.url,m);
  }

  constructor(private http:HttpClient) {}
}
