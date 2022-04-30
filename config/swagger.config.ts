import { DocumentBuilder } from "@nestjs/swagger";

// add tags - description etc
export const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS API Starter Kit')
    .setDescription('The NestJS API Starter Kit API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authentication', 'Authentication Module')
    .addTag('Account', 'Account Module')
    .build();