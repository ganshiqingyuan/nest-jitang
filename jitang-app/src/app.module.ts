import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoModule } from './info/info.module';
import { TypeModule } from './type/type.module';
import { join } from 'path';

import { AppController } from './app.controller';

import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hong2295491460',
      database: 'jitang',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    }),
    InfoModule,
    TypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
