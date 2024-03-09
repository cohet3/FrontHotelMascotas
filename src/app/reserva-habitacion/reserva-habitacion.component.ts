import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-habitacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reserva-habitacion.component.html',
  styleUrl: './reserva-habitacion.component.css'
})
export class ReservaHabitacionComponent {
fechaSalida: any;
onSubmit() {
throw new Error('Method not implemented.');
}
fechaEntrada: any;
  constructor(private router: Router) {}
  redirecionar() {
    this.router.navigate(['alta-mascota']);
    
  }
  redirecionar2() {
  this.router.navigate(['alta-cliente']);
  
}

redirecionar3(){
  this.router.navigate(['alta-reserva']);
}
}
