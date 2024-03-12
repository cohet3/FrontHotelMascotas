import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../_servicio/cliente.service';
import { Cliente } from '../_modelo/cliente';
import { AltaClienteComponent } from '../alta-cliente/alta-cliente.component';
import { RouterModule } from '@angular/router';
import { Factura } from '../_modelo/factura';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule,AltaClienteComponent,RouterModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit  {
  constructor(private servicio:ClienteService){}
  clientes:Cliente[] = [];
  
  
      ngOnInit(): void {
        this.servicio.clienteCambio.subscribe(
          (data) => {this.clientes = data}
        )
       }
  }


