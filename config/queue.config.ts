import { BullModule } from "@nestjs/bull";

export const queueConfig = BullModule.forRoot({
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
    }
});