"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const general_interceptor_1 = require("./general/general.interceptor");
const general_filter_1 = require("./general/general.filter");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const puerto = configService.get('PORT');
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Tostado Perfecto - API')
        .setDescription('API de Cafeinados, donde podras realizar pedidos de productos de café de especialidad, ver el estado de tus pedidos y gestionar tu carrito de compras')
        .setVersion('3.0')
        .addTag('productos')
        .addTag('usuarios')
        .addTag('pedidos')
        .addTag('carrito-de-compras')
        .build();
    console.log('PORT:', configService.get('PORT'));
    console.log('Ambiente:', configService.get('AMBIENTE'));
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalInterceptors(new general_interceptor_1.GeneralInterceptor());
    app.useGlobalFilters(new general_filter_1.GeneralFilter());
    await app.listen(puerto);
}
bootstrap();
//# sourceMappingURL=main.js.map