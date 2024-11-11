import { TipoUsuario } from "./tipoUsuario";
export declare class Usuarios {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    constrasenna: string;
    rut: string;
    tipoUsuarioId: number;
    tipoUsuario: TipoUsuario;
}
