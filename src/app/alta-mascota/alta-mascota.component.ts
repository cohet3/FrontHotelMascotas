import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mascota } from '../_modelo/mascota';
import { MascotaService } from '../_servicio/mascota.service';


@Component({
  selector: 'app-alta-mascota',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-mascota.component.html',
  styleUrl: './alta-mascota.component.css'
})
export class AltaMascotaComponent {

  m1:Mascota={

    "idMascota":0,
    "nombre":"",
    "raza":"",
    "edad":0,
    "tamano":"",
    "tipoHabitacion":"",
    "idCliente":1
  }

   constructor(private servicio: MascotaService,
    private route: ActivatedRoute,
    private router: Router,){}

    altaMascota(): void{
      this.servicio.alta(this.m1).subscribe(()=>console.log("se ha dado de alta"));
      this.servicio.listar().subscribe(data =>
        {this.servicio.mascotaCambio.next(data)});
      this.router.navigate(['alta-reserva']);



  }

}

