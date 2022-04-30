import { registerEnumType } from '@nestjs/graphql';

export enum LoginStatus {
    LOGGED_IN = "LOGGED_IN",
    LOGGED_OUT = "LOGGED_OUT"
}


registerEnumType(LoginStatus, { name: 'LoginStatus', description: undefined })
