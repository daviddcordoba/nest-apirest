import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3307, // desde el que estamos exponiendo
      username:'user_crud',
      password:'root',
      database:'db_crud',
      autoLoadEntities:true, //con esto me ahorro de cargar las entidades manualmente
      synchronize: true // cada vez q hagamos un cambio la db va a tratar de actualizarse  - puedo perder datos no se hace en produccion
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
