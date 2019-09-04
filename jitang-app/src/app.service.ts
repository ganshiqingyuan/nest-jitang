import { Injectable, UploadedFiles } from '@nestjs/common';
import path = require('path');
import fs = require('fs');

@Injectable()
export class AppService {
  saveImg(@UploadedFiles() files): string[] {
    console.log(files)
    const returnArray = [];
    for (const item of files) {
      const imgName = `${Date.now()}${item.originalname}`;
      returnArray.push(imgName);
      const writeImage = fs.createWriteStream(path.join(__dirname, 'dist/img', imgName));
      writeImage.write(item.buffer);
    }
    return returnArray.map(item => `/dist/img/${item}`);
  }
}
