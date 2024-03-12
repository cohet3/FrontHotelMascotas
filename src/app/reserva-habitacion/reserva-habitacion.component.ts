import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Servicio } from '../_modelo/servicio';
import { ReservaService } from '../_servicio/reserva.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva-habitacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reserva-habitacion.component.html',
  styleUrl: './reserva-habitacion.component.css'
})
export class ReservaHabitacionComponent implements OnInit{
  fechaEntrada: Date = new Date();
  fechaSalida: Date = new Date();
  resultados: Date[] = [];
  ngOnInit() {
    // this.resultados = [];
    // this.servicio.getReservas(this.fechaEntrada,this.fechaSalida).subscribe(datos=>this.servicio=datos)
    // console.log(this.resultados)
    // console.log(this.servicio)
    
  }
  constructor(private servicio: ReservaService,private router: Router){}
  // ngOnInit(): void {
  //   this.servicio.getReservas(this.fechaEntrada,this.fechaSalida).subscribe(datos=>this.servicio=datos);
   
  // }
  redirecionar() {
    this.router.navigate(['alta-mascota']);
    
  }
  redirecionar2() {
  this.router.navigate(['alta-cliente']);
  
}
redirecionar3(){
  this.router.navigate(['alta-reserva']);
}
consultarDisponibilidad() {
  if (this.fechaEntrada && this.fechaSalida) {
    this.servicio.consultarDisponibilidad(this.fechaEntrada, this.fechaSalida)
      .subscribe(
        (data) => {
          this.resultados = data;
        },
        (error) => {
          console.log(error);
        }
      );
  } else {
    console.error("Please select both arrival and departure dates");
  }
}

}