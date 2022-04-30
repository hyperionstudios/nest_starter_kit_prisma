import { CacheModule } from "@nestjs/common";
import * as redisStore from 'cache-manager-redis-store';

export const cacheConfig = CacheModule.register({
    isGlobal: true,
    store: redisStore,
    port: parseInt(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
});