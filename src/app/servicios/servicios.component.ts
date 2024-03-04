import { Component, OnInit } from '@angular/core';
import { Servicio } from '../_modelo/servicio';
import { ServicioService } from '../_servicio/servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {
  constructor(private servicio: ServicioService) { }
  servicios: Servicio[] =[];
  ngOnInit(): void {
    this.servicio.listar().subscribe(datos=>this.servicios=datos);
    
  }

  trackByFn(index: number, item: any): any {
    return item.idServicio; // Reemplaza 'id' por la propiedad única de tu modelo
  }

}


