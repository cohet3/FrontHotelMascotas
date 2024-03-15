import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Reserva } from '../_modelo/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../_servicio/reserva.service';

@Component({
  selector: 'app-alta-reserva',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-reserva.component.html',
  styleUrl: './alta-reserva.component.css'
})
export class AltaReservaComponent {
  r1: Reserva={
    idReserva:0,
    fechaEntrada: new Date('2024-02-29'),
    fechaSalida:new Date('2024-03-29'),
    precioR:0,
    idMascota:0,
    cantidadNoches:0,
    idHabitacion:0,
   // disponible:""
  }
    

    
  

    constructor(private servicio:ReservaService,
      private route: ActivatedRoute,
      private router: Router){}
  
  altaReserva(){
    this.servicio.alta(this.r1).subscribe(()=>
    {console.log("se dio de alta");
    this.servicio.listar().subscribe(data =>
    {this.servicio.reservaCambio.next(data)})})
    this.router.navigate(['servicios'])
  }
  redirecionarReserva() {
    this.router.navigate(['alta-reserva']);  
  }
}

  

  
