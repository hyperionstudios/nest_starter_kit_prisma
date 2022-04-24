import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { queueConfig } from 'config/queue.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

// setup bull module for queueing
// setup multer for file uploads
// setup config module
// set up router module

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    queueConfig,
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
