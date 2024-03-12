import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { AltaMascotaComponent } from './alta-mascota/alta-mascota.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { AltaReservaComponent } from './alta-reserva/alta-reserva.component';
import { ReservaHabitacionComponent } from './reserva-habitacion/reserva-habitacion.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { FacturaComponent } from './factura/factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FooterComponent, ServiciosComponent,AltaMascotaComponent,AltaClienteComponent,ClienteComponent,MascotasComponent,AltaReservaComponent,ReservaHabitacionComponent,HeaderComponent,InicioComponent,FacturaComponent,DetalleFacturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelMascotas';
}
