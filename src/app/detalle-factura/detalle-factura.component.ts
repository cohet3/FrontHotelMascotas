import { Component } from '@angular/core';
import { Servicio } from '../_modelo/servicio';
import { DetalleFacturaService } from '../_servicio/detalle-factura.service';

@Component({
  selector: 'app-detalle-factura',
  standalone: true,
  imports: [],
  templateUrl: './detalle-factura.component.html',
  styleUrl: './detalle-factura.component.css'
})
export class DetalleFacturaComponent {
constructor(private servicio:DetalleFacturaService){}
}
