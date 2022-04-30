import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { LoginStatus } from '../prisma/login-status.enum';

@ObjectType()
export class Login {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:true})
    ip!: string | null;

    @Field(() => String, {nullable:true})
    deviceId!: string | null;

    @Field(() => String, {nullable:true})
    deviceType!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    countryCode!: string | null;

    @Field(() => String, {nullable:true})
    countryFlag!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => LoginStatus, {nullable:false,defaultValue:'LOGGED_IN'})
    status!: keyof typeof LoginStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
