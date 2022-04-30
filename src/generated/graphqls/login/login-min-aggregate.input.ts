import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoginMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    ip?: true;

    @Field(() => Boolean, {nullable:true})
    deviceId?: true;

    @Field(() => Boolean, {nullable:true})
    deviceType?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    countryCode?: true;

    @Field(() => Boolean, {nullable:true})
    countryFlag?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
