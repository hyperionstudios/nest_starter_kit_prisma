import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginCreateNestedManyWithoutUserInput } from '../login/login-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => LoginCreateNestedManyWithoutUserInput, {nullable:true})
    logins?: LoginCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
