"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateUsuarioDto {
}
exports.UpdateUsuarioDto = UpdateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del usuario',
        default: 'Direccion 1234',
        example: 'Calle Falsa 123',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Comuna del usuario',
        default: 'Comuna',
        example: 'Providencia',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "comuna", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ciudad del usuario',
        default: 'Ciudad',
        example: 'Santiago',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Región del usuario',
        default: 'Region',
        example: 'Metropolitana',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teléfono del usuario',
        default: '912345678',
        example: '912345678',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUsuarioDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico del usuario',
        default: 'test@dominio.cl',
        example: 'juan.perez@dominio.cl',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña del usuario',
        default: '1234',
        example: 'password123',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 20),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "contrasenna", void 0);
//# sourceMappingURL=update-usuario.dto.js.map