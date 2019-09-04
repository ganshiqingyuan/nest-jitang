import { Controller, Get, Query } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeList } from './type.entity';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get('typeList')
  getInfoList(@Query() query): Promise<TypeList[]> {
    return this.typeService.getTypeList(query);
  }
}
