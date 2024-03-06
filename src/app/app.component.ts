import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ServiciosComponent,ClienteComponent,AltaClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelMascotas';
}
