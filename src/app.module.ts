import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { cacheConfig, queueConfig, routerConfig } from 'config';
import { AccountModule } from './account/account.module';


// setup bull module for queueing
// setup multer for file uploads
// setup config module
// set up router module

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // graphqlConfig,
    queueConfig,
    cacheConfig,
    routerConfig,
    PrismaModule,
    AuthModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
