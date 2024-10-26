import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";
import { CarritoItem } from "./carritoItem";


@Entity({name: 'CarritoDeCompras'})
export class CarritoDeCompras {
    @PrimaryColumn()
    id: number;

    @Column()
    usuarioId: number;

    @OneToMany(()=> Usuario, (usuario) => usuario.carritoDeCompras)
    usuarios: Usuario[];

    @ManyToOne(()=> CarritoItem)
    @JoinColumn({name: 'id_carritoItem'})
    carritoItem: CarritoItem;
    
}