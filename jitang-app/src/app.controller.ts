import { Controller, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('img')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('saveImg')
  @UseInterceptors(FilesInterceptor('img'))
  saveImg(@UploadedFiles() files): string[] {
    return this.appService.saveImg(files);
  }
}
