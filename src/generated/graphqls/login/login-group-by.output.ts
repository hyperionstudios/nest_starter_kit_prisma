import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoginStatus } from '../prisma/login-status.enum';
import { LoginCountAggregate } from './login-count-aggregate.output';
import { LoginMinAggregate } from './login-min-aggregate.output';
import { LoginMaxAggregate } from './login-max-aggregate.output';

@ObjectType()
export class LoginGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => LoginStatus, {nullable:false})
    status!: keyof typeof LoginStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LoginCountAggregate, {nullable:true})
    _count?: LoginCountAggregate;

    @Field(() => LoginMinAggregate, {nullable:true})
    _min?: LoginMinAggregate;

    @Field(() => LoginMaxAggregate, {nullable:true})
    _max?: LoginMaxAggregate;
}
