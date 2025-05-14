import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ // this will be the global validation and will also throw out what is not included in our list 
    whitelist: true,
    forbidNonWhitelisted: true, 
    transform: true, // it will convert the incoming object to and instance of Dto
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
