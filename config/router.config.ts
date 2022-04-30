import { RouterModule } from "@nestjs/core";
import { AuthModule } from "src/auth/auth.module";

export const routerConfig = RouterModule.register([
    {
        path: 'auth',
        module: AuthModule,
    }
]);