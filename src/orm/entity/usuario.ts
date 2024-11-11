import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { TipoUsuario } from "./tipoUsuario";
import { Pedido } from "./pedido";
import { CarritoDeCompras } from "./carritoDeCompras";
import { DireccionEnvio } from "./direccionEnvio";



@Entity({name: 'Usuario'})	 
export class Usuarios {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    constrasenna: string;

    @Column()
    rut: string;

    @Column()
    tipoUsuarioId: number;   
    
    @ManyToOne(()=> TipoUsuario)
    @JoinColumn({name: 'tipoUsuarioId'})
    tipoUsuario: TipoUsuario;

    @ManyToOne(()=> Pedido)
    @JoinColumn({name: 'id'})
    pedido: Pedido;

    @ManyToOne(()=> CarritoDeCompras)
    @JoinColumn({name: 'id'})
    carritoDeCompras: CarritoDeCompras;

    @ManyToOne(()=> DireccionEnvio) 
    @JoinColumn({name: 'id'})
    direccionEnvio: DireccionEnvio;
}