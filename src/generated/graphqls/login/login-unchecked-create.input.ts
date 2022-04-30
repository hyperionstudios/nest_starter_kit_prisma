import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginStatus } from '../prisma/login-status.enum';

@InputType()
export class LoginUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => String, {nullable:true})
    deviceId?: string;

    @Field(() => String, {nullable:true})
    deviceType?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    countryCode?: string;

    @Field(() => String, {nullable:true})
    countryFlag?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => LoginStatus, {nullable:true})
    status?: keyof typeof LoginStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
