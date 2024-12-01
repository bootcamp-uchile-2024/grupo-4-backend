import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto} from './entities/producto.entity';
import { Productos } from 'src/orm/entity/producto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoMapper } from './mappers/producto.mappers';
import { TipoProducto } from 'src/orm/entity/tipoProducto';
import { Categoria } from 'src/orm/entity/categoria';
import { ResponseDto } from './outputDto/responseDto';
import { ProductoDTO } from './dto/producto.dto';
import { ResponseAllProductsDto } from './outputDto/responseAllProductsDto';
import * as fs from 'fs';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Productos)
    private productosRepository: Repository<Productos>,

    @InjectRepository(TipoProducto)
    private tipoProductoRepository: Repository<TipoProducto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}


  productos: Producto[] = [];

  async create(createProductoDto: CreateProductoDto, imagen: Express.Multer.File): Promise<ResponseDto<ProductoDTO>>  {

    const tiposProductos = await this.getAllTiposProducto();
    const categoriasProductos = await this.getAllCategorias();

    console.log('tiposProductos', tiposProductos);
    console.log('categoriasProductos', categoriasProductos);

    const carpeta: string = './estaticos'; //Carpeta donde se guardan las imagenes

    // Crear el directorio si no existe
    if (!fs.existsSync(carpeta)) {
      fs.mkdirSync(carpeta, { recursive: true });
    }

    // Procesar y guardar la imagen
    if (imagen) {
      console.log('imagen', imagen);
      const rutaImagen = `${carpeta}/${Date.now()}-${imagen.originalname}`;
      fs.writeFileSync(rutaImagen, imagen.buffer);
      createProductoDto.imagen = rutaImagen; // Guardar la ruta en el DTO
    }

    const nuevoProducto = new Productos();

    nuevoProducto.nombre = createProductoDto.nombre;
    nuevoProducto.descripcion = createProductoDto.descripcion;
    nuevoProducto.precio = createProductoDto.precio;
    nuevoProducto.imagen = createProductoDto.imagen;
    nuevoProducto.stock = createProductoDto.stock;
    nuevoProducto.marca = createProductoDto.marca;
    nuevoProducto.formato = createProductoDto.formato;
    nuevoProducto.fechaVencimiento = createProductoDto.fecha;
    nuevoProducto.habilitado = false; //Por defecto el producto se habilita

    //Se verifica que el tipo y la categoria existan en la base de datos

    const findTipo = tiposProductos.find(tipo => 
      tipo.nombre.toLocaleLowerCase().trim() === createProductoDto.tipo.toLocaleLowerCase().trim()
    );

    console.log('findTipo', findTipo);

    const findCategoria = categoriasProductos.find(categoria =>
      categoria.nombre.toLocaleLowerCase().trim() === createProductoDto.categorias.toLocaleLowerCase().trim()
    );

    if (!findTipo) return { 
      status: 404,
      message: 'El tipo no existe'
    };

    if (!findCategoria) return {
      status: 404,
      message: 'La categoria no existe'
    };

    nuevoProducto.tipo = findTipo;
    nuevoProducto.categoria = findCategoria;

    const productoGuardado = await this.productosRepository.save(nuevoProducto);
    const productoDto = ProductoMapper.entityToDto(productoGuardado);

    return { status: 201, data: productoDto };


  };

  async findAll(page: number, pageSize: number): Promise<ResponseAllProductsDto<ProductoDTO[]>> {
    const [result, total] = await this.productosRepository.findAndCount({
      where: { habilitado: true }, 
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const data = ProductoMapper.entityListToDtoList(result);

    return {
      status: 200,
      data,
      page,
      pageSize,
      totalItems: total,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async findOne(id: number): Promise<ProductoDTO> {
    const producto: Productos = await this.productosRepository.findOneBy({id: id});
    return ProductoMapper.entityToDto(producto);
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<ResponseDto<ProductoDTO>> {
    
    // Buscar el producto existente
    const producto = await this.productosRepository.findOne({
      where: { id },
      relations: ['tipo', 'categoria'],
    });

    if (!producto) {
      return {
        status: 404,
        message: 'Producto no encontrado',
      };
    }

    if (updateProductoDto.nombre) {
      producto.nombre = updateProductoDto.nombre;
    }
    if (updateProductoDto.descripcion) {
      producto.descripcion = updateProductoDto.descripcion;
    }
    if (updateProductoDto.precio) {
      producto.precio = updateProductoDto.precio;
    }
    if (updateProductoDto.imagen) {
      producto.imagen = updateProductoDto.imagen;
    }
    if (updateProductoDto.stock) {
      producto.stock = updateProductoDto.stock;
    }
    if (updateProductoDto.marca) {
      producto.marca = updateProductoDto.marca;
    }
    if (updateProductoDto.formato) {
      producto.formato = updateProductoDto.formato;
    }
    if (updateProductoDto.fecha) {
      producto.fechaVencimiento = updateProductoDto.fecha;
    }
    if(updateProductoDto.habilitado) {
      producto.habilitado = updateProductoDto.habilitado;
    }

    // Actualizar el tipo si se proporciona
    if (updateProductoDto.tipo) {
      const tipoProducto = await this.tipoProductoRepository.findOne({
        where: { nombre: updateProductoDto.tipo.trim().toLowerCase() },
      });

      if (!tipoProducto) {
        return {
          status: 404,
          message: 'El tipo de producto no existe',
        };
      }

      producto.tipo = tipoProducto;
    }

    // Actualizar las categorías si se proporcionan
    if (updateProductoDto.categorias) {
      const categoria = await this.categoriaRepository.findOne({
        where: { nombre: updateProductoDto.categorias.trim().toLowerCase() },
      });

      if (!categoria) {
        return {
          status: 404,
          message: 'La categoría no existe',
        };
      }

      producto.categoria = categoria;
    }

    // Guardar el producto actualizado
    const productoActualizado = await this.productosRepository.save(producto);
    const productoDto = ProductoMapper.entityToDto(productoActualizado);

    return {
      status: 200,
      data: productoDto,
    };
  }

  async remove(id: number): Promise<ResponseDto<null>> {
    const producto = await this.productosRepository.findOneBy({ id });
  
    if (!producto) {
      return {
        status: 404,
        message: 'Producto no encontrado',
      };
    }
  
    await this.productosRepository.delete(id);
  
    return {
      status: 200,
      message: 'Producto eliminado correctamente',
    };
  }

  async getAllTiposProducto(): Promise<TipoProducto[]> {
    return await this.tipoProductoRepository.find();
  }
  
  async getAllCategorias(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async updateImagen(id: number, imagen: Express.Multer.File): Promise<ResponseDto<null>> {
    const producto = await this.productosRepository.findOneBy({ id });
  
    if (!producto) {
      return { status: 404, message: 'Producto no encontrado' };
    }
  
    const carpeta = './estaticos';
  
    if (producto.imagen) {
      const rutaAntigua = producto.imagen;
      if (fs.existsSync(rutaAntigua)) {
        fs.unlinkSync(rutaAntigua); 
      }
    }
  
    if (imagen) {
      const nuevaRuta = `${carpeta}/${Date.now()}-${imagen.originalname}`;
      fs.writeFileSync(nuevaRuta, imagen.buffer);
      producto.imagen = nuevaRuta; 
    }
  
    await this.productosRepository.save(producto);
  
    return { status: 200, message: 'Imagen actualizada correctamente' };
  }

  async deleteImagen(id: number): Promise<ResponseDto<null>> {
    const producto = await this.productosRepository.findOneBy({ id });
  
    if (!producto) {
      return { status: 404, message: 'Producto no encontrado' };
    }
  
    if (producto.imagen) {
      const rutaImagen = producto.imagen;
      if (fs.existsSync(rutaImagen)) {
        fs.unlinkSync(rutaImagen);
      }
      producto.imagen = null; 
      await this.productosRepository.save(producto);
    }
  
    return { status: 200, message: 'Imagen eliminada correctamente' };
  }

  async actualizarHabilitado(id: number, habilitado: boolean): Promise<ResponseDto<null>> {
    const producto = await this.productosRepository.findOneBy({ id });
  
    if (!producto) {
      return { status: 404, message: 'Producto no encontrado' };
    }
  
    producto.habilitado = habilitado;
    await this.productosRepository.save(producto);
  
    return { status: 200, message: 'Estado de habilitado actualizado exitosamente' };
  }
}
