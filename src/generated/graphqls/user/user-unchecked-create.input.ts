import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginUncheckedCreateNestedManyWithoutUserInput } from '../login/login-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => LoginUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    logins?: LoginUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
