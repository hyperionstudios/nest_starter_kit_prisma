import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
