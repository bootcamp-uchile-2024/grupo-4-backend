"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoDeComprasModule = void 0;
const common_1 = require("@nestjs/common");
const carrito_de_compras_service_1 = require("./carrito-de-compras.service");
const carrito_de_compras_controller_1 = require("./carrito-de-compras.controller");
const usuario_module_1 = require("../usuario/usuario.module");
const productos_module_1 = require("../productos/productos.module");
const typeorm_1 = require("@nestjs/typeorm");
const carritoDeCompras_1 = require("../orm/entity/carritoDeCompras");
const usuario_1 = require("../orm/entity/usuario");
const producto_1 = require("../orm/entity/producto");
const carritoItem_1 = require("../orm/entity/carritoItem");
let CarritoDeComprasModule = class CarritoDeComprasModule {
};
exports.CarritoDeComprasModule = CarritoDeComprasModule;
exports.CarritoDeComprasModule = CarritoDeComprasModule = __decorate([
    (0, common_1.Module)({
        controllers: [carrito_de_compras_controller_1.CarritoDeComprasController],
        providers: [carrito_de_compras_service_1.CarritoDeComprasService],
        imports: [typeorm_1.TypeOrmModule.forFeature([carritoDeCompras_1.CarritoDeCompras, usuario_1.Usuarios, producto_1.Productos, carritoItem_1.CarritoItem]), (0, common_1.forwardRef)(() => usuario_module_1.UsuarioModule), (0, common_1.forwardRef)(() => productos_module_1.ProductosModule)],
    })
], CarritoDeComprasModule);
//# sourceMappingURL=carrito-de-compras.module.js.map