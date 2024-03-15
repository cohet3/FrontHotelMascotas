import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Servicio } from '../_modelo/servicio';
import { ReservaService } from '../_servicio/reserva.service';
import { CommonModule } from '@angular/common';
import { Reserva } from '../_modelo/reserva';

@Component({
  selector: 'app-reserva-habitacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reserva-habitacion.component.html',
  styleUrl: './reserva-habitacion.component.css'
})
export class ReservaHabitacionComponent implements OnInit{
  reserva: Reserva={
        "idReserva":1,
        "fechaEntrada": new Date(2024,3,15),
        "fechaSalida": new Date(2024,3,16),
        "precioR": 0,
        "idMascota": 0,        
        "idHabitacion": 0,
        "cantidadNoches": 0,}
  reservas: Reserva[] = [];
  fechaEntrada!: Date;
  fechaSalida!: Date;
  buscarReservas() {
    console.log(this.fechaEntrada)
    this.reservaService.buscarFecha(this.fechaEntrada, this.fechaSalida).subscribe(
      (reservas) => this.reservas = reservas
    );
    console.log(this.reservas)
  }
  ngOnInit() {
    // this.resultados = [];
    // this.servicio.getReservas(this.fechaEntrada,this.fechaSalida).subscribe(datos=>this.servicio=datos)
    // console.log(this.resultados)
    // console.log(this.servicio)
    
  }
  constructor(private reservaService: ReservaService,private router: Router){}
  redirecionar() {
    this.router.navigate(['alta-mascota']);
    
  }
 redirecionar2() {
  this.router.navigate(['alta-cliente']);
  
}
redirecionar3(){
 this.router.navigate(['alta-reserva']);
}


}