import { Factura } from "./factura"
import { Mascota } from "./mascota";

export interface Cliente{
    "idCliente": number
    "nombre": string,
    "direccion": string,
    "telefono": string,
    facturas: Factura [];
    mascotas : Mascota [];
}