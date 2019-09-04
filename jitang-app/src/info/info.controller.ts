import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoList } from './info.entity';
import { TypeService } from '../type/type.service';
import { SaveArticalDto } from './dto/save-artical.dto';

import uuid = require('uuid');

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService , private typeService: TypeService) {}

  @Get('infoDetail')
  getInfoDetail(@Query() query): Promise<InfoList> {
    return this.infoService.getInfoDetail(query)
  }

  @Post('saveArtical')
  async saveArtical(@Body() saveArticalDto: SaveArticalDto){
    const typeId = uuid.v4();
    await this.infoService.saveInfo(saveArticalDto,typeId);
    await this.typeService.saveType(saveArticalDto,typeId);
    return '成功';
  }
}
