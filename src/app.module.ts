import { Module } from '@nestjs/common';
import { queueConfig } from 'config/queue.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// setup bull module for queueing
// setup multer for file uploads
// setup config module
// set up router module

@Module({
  imports: [
    queueConfig,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
