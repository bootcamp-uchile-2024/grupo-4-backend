import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoUsuario } from "./tipoUsuario";
import { CarritoDeCompras } from "./carritoDeCompras";
import { DireccionEnvio } from "./direccionEnvio";

@Entity({ name: 'Usuario' })
export class Usuarios {
  @PrimaryGeneratedColumn()
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

  @ManyToOne(() => TipoUsuario)
  @JoinColumn({ name: 'tipoUsuarioId' })
  tipoUsuario: TipoUsuario;

  @OneToMany(() => CarritoDeCompras, (carrito) => carrito.usuario)
  carritoDeCompras: CarritoDeCompras[];

  // Otras relaciones, asegúrate de que están correctamente definidas
}
