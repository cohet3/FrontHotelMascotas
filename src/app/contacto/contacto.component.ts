import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  correo: string ='';
  nombre: string ='';
  telefono: string ='';
  comentario: string ='';
enviado:boolean = false;
mensaje:string = '';

enviarInfo(){
  this.enviado=true
this.mensaje='Sus datos han sido enviados correctamente'
}
}
