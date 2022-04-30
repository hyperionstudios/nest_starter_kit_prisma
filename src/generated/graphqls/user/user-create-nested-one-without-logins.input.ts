import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLoginsInput } from './user-create-without-logins.input';
import { UserCreateOrConnectWithoutLoginsInput } from './user-create-or-connect-without-logins.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLoginsInput {

    @Field(() => UserCreateWithoutLoginsInput, {nullable:true})
    create?: UserCreateWithoutLoginsInput;

    @Field(() => UserCreateOrConnectWithoutLoginsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLoginsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
