import { Component, OnInit } from '@angular/core';
import { Servicio } from '../_modelo/servicio';
import { ServicioService } from '../_servicio/servicio.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {

  constructor(private servicio: ServicioService) { }
  
  servicios: Servicio[] =[];

  ngOnInit(): void {
    this.servicio.listar().subscribe(datos=>this.servicios=datos);
  }


}


