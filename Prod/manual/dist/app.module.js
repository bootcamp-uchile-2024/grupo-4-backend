"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const productos_module_1 = require("./productos/productos.module");
const general_middleware_1 = require("./general/general.middleware");
const usuario_module_1 = require("./usuario/usuario.module");
const pedido_module_1 = require("./pedido/pedido.module");
const carrito_de_compras_module_1 = require("./carrito-de-compras/carrito-de-compras.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(general_middleware_1.GeneralMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [productos_module_1.ProductosModule, usuario_module_1.UsuarioModule, pedido_module_1.PedidoModule, carrito_de_compras_module_1.CarritoDeComprasModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '.env.production',
                isGlobal: true,
                validate: (config) => {
                    if (!config.PORT) {
                        throw new common_1.HttpException('Se requiere un valor a asignar al puerto', common_1.HttpStatus.BAD_REQUEST);
                    }
                    if (config.PORT == "6000") {
                        throw new common_1.HttpException('El valor del puerto debe ser diferente a 6000', common_1.HttpStatus.BAD_REQUEST);
                    }
                    return {
                        PORT: parseInt(config.PORT),
                        AMBIENTE: config.AMBIENTE,
                    };
                }
            })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map