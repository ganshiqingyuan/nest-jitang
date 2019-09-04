import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoList} from './info.entity';
import { SaveArticalDto } from './dto/save-artical.dto';

import uuid = require('uuid');

var Entities = require('html-entities').XmlEntities;
var entities = new Entities();

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(InfoList)
    private readonly InfoListitory: Repository<InfoList>,
  ) {}

  async getInfoDetail(@Query() query): Promise<InfoList> {
    var data = await this.InfoListitory.findOne({where: { belongid: query.belongid}});
    if(data){
        data.content = entities.decode(data.content)
        return data
    }
    else{
      console.log("123")
      return new InfoList()
    }
  }

  saveInfo(saveArticalDto: SaveArticalDto, typeId: String): Promise<InfoList> {
    const newInfo = new InfoList();
    newInfo.content = saveArticalDto.content;
    newInfo.type = saveArticalDto.type;
    newInfo.belongid = typeId;
    newInfo.id = uuid.v4();
    newInfo.userid = 'yuzhen';

    return this.InfoListitory.save(newInfo);

  }

}
