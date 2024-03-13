import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../_modelo/cliente';
import { ClienteService } from '../_servicio/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Factura } from '../_modelo/factura';

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent {
  c1={
    "idCliente": 0,
    "nombre": "",
    "direccion": "",
    "telefono": ""}  
    constructor(private servicio:ClienteService,
      private route: ActivatedRoute,
      private router: Router){}
  
  altaCliente(){
    this.servicio.alta(this.c1).subscribe(()=>
    {console.log("se dio de alta");
    this.servicio.listar().subscribe(data =>
    {this.servicio.clienteCambio.next(data)})})
    this.router.navigate([''])
  }
  
}
