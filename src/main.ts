import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from 'config/swagger.config';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // setup global prefix for all routes
  app.setGlobalPrefix('api');
  // setup versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // setup global pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  // setup helmet
  app.use(helmet());
  // setup swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
    }
  });
  // setup use of other microservices
  await app.listen(3000);
}
bootstrap();
