import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001'],
  });
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);

  Logger.log(`Voa passarinho Server is now Running on port ${port}`);
}
bootstrap();
