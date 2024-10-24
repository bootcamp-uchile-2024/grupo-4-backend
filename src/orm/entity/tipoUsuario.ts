import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";


@Entity({name: 'TipoUsuario'})
export class TipoUsuario {
    @PrimaryColumn()
    id: number;

    @Column()
    nombreTipo: string;
   
    @OneToMany(()=> Usuario, (usuario) => usuario.tipoUsuarioId)
    usuarios: Usuario[];
    
}