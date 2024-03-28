import { Component, OnInit, Output } from '@angular/core';
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
        "fechaEntrada": new Date(2024,0o3,15),
        "fechaSalida": new Date(2024,0o3,16),
        "precioR": 0,
        "idMascota": 0,        
        "idHabitacion": 0,
        "cantidadNoches": 0,}
  reservas: Reserva[] = [];
  fechaEntrada!: Date;
  fechaSalida!: Date;
  numeroHabitaciones: number = 10;
  disponible: boolean = false;
  //handler Date input minDate
  fechaActual: Date = new Date(); 
  fechaFormateada = this.formatearFecha(this.fechaActual);
  private _variablesActualizadas: boolean= false;
  isLoading = false;  // Flag for loading state
 

  
  ngOnInit() { 
    //console.log(this.fechaActual.toLocaleDateString())
   // console.log(this.fechaFormateada)
    this.fechaEntrada = new Date(); // Or set based on your logic
    this.fechaSalida = new Date(); // Or set based on your logic
    

    if (this.fechaEntrada && this.fechaSalida) {
      this._variablesActualizadas = true;
    } else {
      this._variablesActualizadas = false;
    }
  }
  onFechaSalidaChange(): void {
    if (this.fechaEntrada?.valueOf() && this.fechaSalida?.valueOf()) {
      this._variablesActualizadas = true;
    } else {
      this._variablesActualizadas = false;
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
  this.isLoading = true; // Set loading state to true
  this.disponible = false; // Reset availability before request

  this.reservaService.buscarFecha(this.fechaEntrada, this.fechaSalida)
    .subscribe(
      (reservas) => {
        this.reservas = reservas;
        this.disponible = reservas.length < this.numeroHabitaciones;
        this.isLoading = false; // Set loading state to false after response
      },
      (error) => {
        console.error("Error fetching reservations:", error);
        this.isLoading = false; // Set loading state to false on error
      }
    );
    if (!this.disponible) {
      this.router.navigate(['/alta-reserva', this.fechaEntrada, this.fechaSalida]);
    //  console.log(this.fechaEntrada)
    //  console.log(this.fechaSalida)
    } else {
      // Handle case where no rooms are available
      console.log("hola"+this.fechaSalida)
    }
}
getDisponibilidadTexto(): string {
  return this.disponible ? 'Disponible' : 'No disponible';
}


}