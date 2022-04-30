import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LoginCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:false})
    deviceType!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    countryCode!: number;

    @Field(() => Int, {nullable:false})
    countryFlag!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
