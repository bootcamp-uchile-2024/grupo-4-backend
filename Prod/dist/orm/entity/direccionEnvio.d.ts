import { Despacho } from "./despacho";
import { Usuarios } from "./usuario";
export declare class DireccionEnvio {
    id: number;
    direccion: string;
    ciudad: string;
    codigoPostal: string;
    usuarioId: number;
    despacho: Despacho;
    usuarios: Usuarios[];
}
