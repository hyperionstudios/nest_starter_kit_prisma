import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLoginsInput } from './user-create-without-logins.input';

@InputType()
export class UserCreateOrConnectWithoutLoginsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutLoginsInput, {nullable:false})
    create!: UserCreateWithoutLoginsInput;
}
