import { SetMetadata } from "@nestjs/common";



export const CLAVE_ROLES = 'ROLES_PERMITIDOS';
export const RolesPermitidos = (...roles: number[]) => SetMetadata(CLAVE_ROLES, roles);