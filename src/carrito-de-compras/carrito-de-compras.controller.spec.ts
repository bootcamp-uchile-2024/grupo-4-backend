import { Test, TestingModule } from '@nestjs/testing';
import { CarritoDeComprasController } from './carrito-de-compras.controller';
import { CarritoDeComprasService } from './carrito-de-compras.service';

describe('CarritoDeComprasController', () => {
  let controller: CarritoDeComprasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarritoDeComprasController],
      providers: [CarritoDeComprasService],
    }).compile();

    controller = module.get<CarritoDeComprasController>(CarritoDeComprasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
