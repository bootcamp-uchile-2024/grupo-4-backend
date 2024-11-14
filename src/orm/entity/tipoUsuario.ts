import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Usuarios } from "./usuario";


@Entity({name: 'TipoUsuarioId'})
export class TipoUsuario {
    @PrimaryColumn()
    id: number;

    @Column()
    nombreTipo: string;
   
    @OneToMany(()=> Usuarios, (usuario) => usuario.tipoUsuario)
    usuarios: Usuarios[];
    
}