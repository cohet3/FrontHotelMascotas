import { Component, OnInit } from '@angular/core';
import { Servicio } from '../_modelo/servicios';
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
  ngOnInit(): void {
    this.servicio.listar();
  }
  servicios: Servicio[] =[];

}


