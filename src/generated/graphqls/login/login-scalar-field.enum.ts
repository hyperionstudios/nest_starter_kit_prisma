import { registerEnumType } from '@nestjs/graphql';

export enum LoginScalarFieldEnum {
    id = "id",
    userId = "userId",
    ip = "ip",
    deviceId = "deviceId",
    deviceType = "deviceType",
    country = "country",
    countryCode = "countryCode",
    countryFlag = "countryFlag",
    city = "city",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LoginScalarFieldEnum, { name: 'LoginScalarFieldEnum', description: undefined })
