import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLoginsInput } from './user-create-without-logins.input';
import { UserCreateOrConnectWithoutLoginsInput } from './user-create-or-connect-without-logins.input';
import { UserUpsertWithoutLoginsInput } from './user-upsert-without-logins.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLoginsInput } from './user-update-without-logins.input';

@InputType()
export class UserUpdateOneWithoutLoginsInput {

    @Field(() => UserCreateWithoutLoginsInput, {nullable:true})
    create?: UserCreateWithoutLoginsInput;

    @Field(() => UserCreateOrConnectWithoutLoginsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLoginsInput;

    @Field(() => UserUpsertWithoutLoginsInput, {nullable:true})
    upsert?: UserUpsertWithoutLoginsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLoginsInput, {nullable:true})
    update?: UserUpdateWithoutLoginsInput;
}
