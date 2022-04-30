import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginStatus } from './login-status.enum';

@InputType()
export class NestedEnumLoginStatusFilter {

    @Field(() => LoginStatus, {nullable:true})
    equals?: keyof typeof LoginStatus;

    @Field(() => [LoginStatus], {nullable:true})
    in?: Array<keyof typeof LoginStatus>;

    @Field(() => [LoginStatus], {nullable:true})
    notIn?: Array<keyof typeof LoginStatus>;

    @Field(() => NestedEnumLoginStatusFilter, {nullable:true})
    not?: NestedEnumLoginStatusFilter;
}
