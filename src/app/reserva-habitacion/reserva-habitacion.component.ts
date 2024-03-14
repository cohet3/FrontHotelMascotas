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
  
  fechaEntrada: string = "";
  fechaSalida: string = "";
        "precioR": number=0;
        "idMascota": number=0;
        "cantidadNoches": number=0;
        "idHabitacion": number=0;
  resultados: Reserva[] = [];
  ngOnInit() {
    // this.resultados = [];
    // this.servicio.getReservas(this.fechaEntrada,this.fechaSalida).subscribe(datos=>this.servicio=datos)
    // console.log(this.resultados)
    // console.log(this.servicio)
    
  }
  constructor(private servicio: ReservaService,private router: Router){}
   //ngOnInit(): void {
    //this.servicio.getReservas(this.fechaEntrada,this.fechaSalida).subscribe(datos=>this.servicio=datos);
   
   //}
  redirecionar() {
    this.router.navigate(['alta-mascota']);
    
  }
 redirecionar2() {
  this.router.navigate(['alta-cliente']);
  
}
redirecionar3(){
 this.router.navigate(['alta-reserva']);
}

buscarDisponibilidad() {
  this.servicio.buscarFecha(this.fechaEntrada, this.fechaSalida)
    .subscribe(
     (data) => {
       this.resultados = data;
      },
      (error) => {
       console.log(error);
      }
    );
}

}