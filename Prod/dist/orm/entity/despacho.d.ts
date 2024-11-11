import { EstadoDespacho } from "./estadoDespacho";
import { DireccionEnvio } from "./direccionEnvio";
export declare class Despacho {
    id: number;
    estado: string;
    fechaDespacho: Date;
    fechaEntregaEstimada: Date;
    direccionEnvioId: number;
    estadoDespacho: EstadoDespacho;
    direccionEnvio: DireccionEnvio[];
}
