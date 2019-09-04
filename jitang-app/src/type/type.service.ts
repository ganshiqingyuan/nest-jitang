import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeList} from './type.entity';
import { SaveArticalDto } from 'src/info/dto/save-artical.dto';

import uuid = require('uuid');

var Entities = require('html-entities').XmlEntities;
var entities = new Entities();

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeList)
    private readonly TypeListitory: Repository<TypeList>,
  ) {}

  async getTypeList(@Query() query): Promise<TypeList[]> {
    let data :TypeList[] =  await this.TypeListitory.find(
      {where: { type: query.type}, take: query.pageSize ? query.pageSize : 1, skip: query.pageNum ? query.pageNum : 10},
    );
    data.forEach(item=>{
      item.content = entities.decode(item.content)
    })
    return data
  }

  saveType(saveArticalDto: SaveArticalDto, typeId: string) {
    const newType = new TypeList();
    newType.id = typeId;
    newType.content = `<img :src=${saveArticalDto.titleImg}/>${saveArticalDto.content}`;
    newType.title = saveArticalDto.title;
    newType.type = saveArticalDto.type;
    newType.userid = 'yuzhen';

    return this.TypeListitory.save(newType);
  }
}
