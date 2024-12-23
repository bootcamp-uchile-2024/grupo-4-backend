import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';
import { CompraDto } from './dto/compra.dto';
import { ResponseDto } from './outputDto/responseDto';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<ResponseDto<CompraDto>> {
    const compra = this.compraRepository.create(createCompraDto);
    const savedCompra = await this.compraRepository.save(compra);

    const compraDto = new CompraDto();
    compraDto.id = savedCompra.id;
    compraDto.email = savedCompra.email;
    compraDto.direccion = savedCompra.direccion;
    compraDto.telefono = savedCompra.telefono;
    compraDto.carritoId = savedCompra.carritoId;

    return {
      status: 201,
      data: compraDto,
    };
  }

  async findOne(id: number): Promise<ResponseDto<CompraDto>> {
    const compra = await this.compraRepository.findOne({ where: { id } });

    if (!compra) {
      return {
        status: 404,
        message: 'Compra no encontrada',
      };
    }

    const compraDto = new CompraDto();
    compraDto.id = compra.id;
    compraDto.email = compra.email;
    compraDto.direccion = compra.direccion;
    compraDto.telefono = compra.telefono;
    compraDto.carritoId = compra.carritoId;

    return {
      status: 200,
      data: compraDto,
    };
  }
}