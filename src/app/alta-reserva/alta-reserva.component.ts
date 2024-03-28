import { Component, Input, OnInit } from '@angular/core';
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
export class AltaReservaComponent implements OnInit {
  r1: Reserva={
    idReserva:0,
    fechaEntrada: new Date(),
    fechaSalida:new Date(),
    precioR:20,
    idMascota:1,
    cantidadNoches:0,
    idHabitacion:1,
   // disponible:""
  }
  fechaEntrada!: Date;
  fechaSalida!: Date;
    constructor(private servicio:ReservaService,
      private route: ActivatedRoute,
      private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const fechaEntradaString = params.get('fechaEntrada');
      const fechaSalidaString = params.get('fechaSalida');
      console.log(typeof(fechaEntradaString))
      console.log(fechaSalidaString)

      if (fechaEntradaString && fechaSalidaString) {
        this.fechaEntrada = new Date(fechaEntradaString);
        this.fechaSalida = new Date(fechaSalidaString);
        console.log(typeof(this.fechaEntrada))
        console.log(this.fechaEntrada)
      }
    });
  }
  
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

  

  
