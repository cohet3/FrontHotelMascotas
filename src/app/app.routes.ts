import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { QuinesSomosComponent } from './quines-somos/quines-somos.component';
import { ReservaHabitacionComponent } from './reserva-habitacion/reserva-habitacion.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

export const routes: Routes = [
    {"path": "inicio", "component" : InicioComponent},
    {"path": "cliente", "component" : ClienteComponent},
    {"path": "", redirectTo: "/inicio", pathMatch:"full"},
    {"path":"contacto","component":ContactoComponent},
    {"path": "galeria-fotos", "component" : GaleriaFotosComponent},
    {"path": "opiniones", "component" : OpinionesComponent},
    {"path":"quines-somos","component":QuinesSomosComponent},
    {"path": "reserva-habitacion", "component" : ReservaHabitacionComponent},
    {"path": "servicios", "component" : ServiciosComponent},
    {"path":"ubicacion","component":UbicacionComponent},
];
