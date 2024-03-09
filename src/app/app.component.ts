import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { AltaMascotaComponent } from './alta-mascota/alta-mascota.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { AltaReservaComponent } from './alta-reserva/alta-reserva.component';
import { ReservaHabitacionComponent } from './reserva-habitacion/reserva-habitacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ServiciosComponent,AltaMascotaComponent,AltaClienteComponent,ClienteComponent,MascotasComponent,AltaReservaComponent,ReservaHabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelMascotas';
}
