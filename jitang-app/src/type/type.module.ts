import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { TypeList } from './type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TypeList])],
    providers: [TypeService],
    controllers: [TypeController],
  })
  export class TypeModule {}