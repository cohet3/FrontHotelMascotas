import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-habitacion',
  standalone: true,
  imports: [],
  templateUrl: './reserva-habitacion.component.html',
  styleUrl: './reserva-habitacion.component.css'
})
export class ReservaHabitacionComponent {
  constructor(private router: Router) {}
  redirecionar() {
    this.router.navigate(['alta-cliente']);
  }

}
