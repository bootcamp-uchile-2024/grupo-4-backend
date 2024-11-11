import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Usuarios } from "./usuario";
import { CarritoItem } from "./carritoItem";


@Entity({name: 'CarritoDeCompras'})
export class CarritoDeCompras {
    @PrimaryColumn()
    id: number;

    @Column()
    usuarioId: number;

    @OneToMany(()=> Usuarios, (usuario) => usuario.carritoDeCompras)
    usuarios: Usuarios[];

    @ManyToOne(()=> CarritoItem)
    @JoinColumn({name: 'id_carritoItem'})
    carritoItem: CarritoItem;
    
}