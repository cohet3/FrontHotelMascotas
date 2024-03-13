import { Factura } from "./factura";
import { Reserva } from "./reserva";
import { Servicio } from "./servicio";

export class detalleFactura{
    
  'idDetalleFactura': number;
  'concepto': string;
  'fechaFactura': string;
  'precioDF': number;
  factura: Factura []=[];
  reserva: Reserva []=[];
  servicio: Servicio []=[];
}
