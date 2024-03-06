import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { AltaMascotaComponent } from './alta-mascota/alta-mascota.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ServiciosComponent,AltaMascotaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelMascotas';
}
