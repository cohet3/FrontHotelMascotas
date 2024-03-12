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
import { AltaMascotaComponent } from './alta-mascota/alta-mascota.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { AltaReservaComponent } from './alta-reserva/alta-reserva.component';
import { HeaderComponent } from './header/header.component';


export const routes: Routes = [
    {path:"inicio", component:InicioComponent},
    {path:"alta-mascota",component:AltaMascotaComponent},
    {path:"alta-cliente",component:AltaClienteComponent},
    {path:"alta-reserva",component:AltaReservaComponent},
    {path:"cliente", component:ClienteComponent},
    {path:"", redirectTo: "/inicio", pathMatch:"full"},
    {path:"contacto",component:ContactoComponent},
    {path:"galeria-fotos", component : GaleriaFotosComponent},
    {path:"opiniones", component:OpinionesComponent},
    {path:"quienes-somos",component:QuinesSomosComponent},
    {path:"reserva-habitacion", component: ReservaHabitacionComponent},
    {path:'servicios', component:ServiciosComponent},
    {path:"ubicacion",component:UbicacionComponent},
    {path:"header",component:HeaderComponent},

];


