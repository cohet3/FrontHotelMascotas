import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Servicio } from '../_modelo/servicio';
import { ReservaService } from '../_servicio/reserva.service';
import { CommonModule } from '@angular/common';
import { Reserva } from '../_modelo/reserva';
import { Observable, of } from 'rxjs';

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
  numeroHabitaciones: number = 2;
  disponible: boolean = false;
  //handler Date input minDate
  fechaActual: Date = new Date(); 
  fechaFormateada = this.formatearFecha(this.fechaActual);

  
  ngOnInit() { 
    console.log(this.fechaActual.toLocaleDateString())
    console.log(this.fechaFormateada)
    if (Boolean(this.fechaEntrada?.valueOf) && Boolean(this.fechaSalida?.valueOf)) {
      this.buscarReservas();
    }

  }
  constructor(private reservaService: ReservaService,private router: Router){}
  formatearFecha(fecha: Date): string {
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    return `${año}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
  }

  
  redirecionar() {
    this.router.navigate(['alta-mascota']);
    
  }
 redirecionar2() {
  this.router.navigate(['alta-cliente']);
  
}
redirecionar3(){
 this.router.navigate(['alta-reserva']);
}
buscarReservas() {
  this.reservaService.buscarFecha(this.fechaEntrada, this.fechaSalida).subscribe(
    (reservas) => this.reservas = reservas
  );
  if( this.reservas.length >= this.numeroHabitaciones){
    this.disponible = false;
    console.log(this.reservas.length)
    console.log("no quedan habitaciones libres en la fecha solicitada")
  }else{
    
    console.log("sí quedan habitaciones libres en la fecha solicitada")
    console.log(this.reservas.length+1)
    this.disponible = true;
   // this.redirecionar3();
  }
}
getDisponibilidadTexto(): string {
  return this.disponible ? 'Disponible' : 'No disponible';
}


}