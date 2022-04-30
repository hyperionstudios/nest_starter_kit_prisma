import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLoginsInput } from './user-update-without-logins.input';
import { UserCreateWithoutLoginsInput } from './user-create-without-logins.input';

@InputType()
export class UserUpsertWithoutLoginsInput {

    @Field(() => UserUpdateWithoutLoginsInput, {nullable:false})
    update!: UserUpdateWithoutLoginsInput;

    @Field(() => UserCreateWithoutLoginsInput, {nullable:false})
    create!: UserCreateWithoutLoginsInput;
}
