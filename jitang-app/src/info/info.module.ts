import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { InfoList } from './info.entity';
import { TypeService } from '../type/type.service';
import { TypeList } from '../type/type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([InfoList]), TypeOrmModule.forFeature([TypeList])],
    providers: [InfoService, TypeService],
    controllers: [InfoController],
  })
  export class InfoModule {}