import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'bd-server',
         port: 3306,
         username: 'root',
         password: 'cafeinados24',
         database: 'cafeinados'
    }),
    OrmModule
    ],
})
export class OrmModule {}
