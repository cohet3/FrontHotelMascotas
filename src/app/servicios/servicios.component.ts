
import { Component } from '@angular/core';
import { Servicio } from '../_modelo/servicio';
import { ServicioService } from '../_servicio/servicio.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {

  constructor(private servicio: ServicioService) { }
  
  servicios: Servicio[] =[];
  cantidad: number = 0;

  ngOnInit(): void {
    this.servicio.listar().subscribe(datos=>this.servicios=datos);
    
  }
  anadirServicio(servicio:Servicio){
   
  }
}


