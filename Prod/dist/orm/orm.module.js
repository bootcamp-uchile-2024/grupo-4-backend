"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_1 = require("./entity/categoria");
const estadoDespacho_1 = require("./entity/estadoDespacho");
const paisOrigen_1 = require("./entity/paisOrigen");
const tipoProducto_1 = require("./entity/tipoProducto");
const tipoUsuario_1 = require("./entity/tipoUsuario");
const pedidoItem_1 = require("./entity/pedidoItem");
const carritoItem_1 = require("./entity/carritoItem");
const carritoDeCompras_1 = require("./entity/carritoDeCompras");
const despacho_1 = require("./entity/despacho");
const pedido_1 = require("./entity/pedido");
const direccionEnvio_1 = require("./entity/direccionEnvio");
const usuario_1 = require("./entity/usuario");
const producto_1 = require("./entity/producto");
let OrmModule = class OrmModule {
};
exports.OrmModule = OrmModule;
exports.OrmModule = OrmModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3700,
                username: 'root',
                password: 'cafeinados24',
                database: 'cafeinados',
                entities: [
                    categoria_1.Categoria,
                    estadoDespacho_1.EstadoDespacho,
                    paisOrigen_1.PaisOrigen,
                    tipoProducto_1.TipoProducto,
                    tipoUsuario_1.TipoUsuario,
                    pedidoItem_1.PedidoItem,
                    carritoItem_1.CarritoItem,
                    carritoDeCompras_1.CarritoDeCompras,
                    despacho_1.Despacho,
                    pedido_1.Pedido,
                    direccionEnvio_1.DireccionEnvio,
                    usuario_1.Usuarios,
                    producto_1.Productos
                ],
            }),
            OrmModule
        ],
    })
], OrmModule);
//# sourceMappingURL=orm.module.js.map