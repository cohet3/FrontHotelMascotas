import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../_modelo/factura';
import { ClienteService } from '../_servicio/cliente.service';
import { Cliente } from '../_modelo/cliente';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit {

  facturas: Factura[] = [];
  
  //cliente: Cliente = {idCliente:=}Cliente();


  constructor(private route: ActivatedRoute, private servico: ClienteService) {}


  ngOnInit(): void {

    
    //this.servico.listar1.subscribe(data =>this.cliente = data);
    
  }

  

  
}


