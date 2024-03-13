import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Factura } from '../_modelo/factura';
import { ClienteService } from '../_servicio/cliente.service';
import { Cliente } from '../_modelo/cliente';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from '../cliente/cliente.component';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FormsModule,ClienteComponent,RouterModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit {
  

  //facturas: Factura[] = [];

  cliente={
 

    "idCliente":0,
    "nombre":"",
    "direccion":"",
    "telefono":"",
    "mascotas":[{"idMascota":0,"nombre":"","raza":"","edad":0,"tamano":"","tipoHabitacion":""}],
    "facturas":[{"idFactura":0}],
  }



constructor(private route: ActivatedRoute, private servicio: ClienteService) {}

ngOnInit(): void {

  

  this.servicio.listar1(1).subscribe(data =>this.cliente = data);
   
}
}










  

  



