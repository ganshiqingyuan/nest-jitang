import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import path = require('path');

import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

import * as serveStatic from 'serve-static';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(path.resolve(__dirname, 'dist'));
  app.use('/dist', serveStatic(path.resolve(__dirname, 'dist'), {
    maxAge: '1d',
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
  }));

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
