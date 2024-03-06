import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AltaMascotaComponent } from '../alta-mascota/alta-mascota.component';
import { Mascota } from '../_modelo/mascota';
import { MascotaService } from '../_servicio/mascota.service';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [RouterModule,AltaMascotaComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent implements OnInit{

  constructor(private servicio:MascotaService){}
  mascotas:Mascota[] = [];


  ngOnInit(): void {
    this.servicio.mascotaCambio.subscribe(
      (data) => {this.mascotas = data}
    )
  }
  
   
    
  }


