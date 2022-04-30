import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginStatus } from './login-status.enum';
import { NestedEnumLoginStatusWithAggregatesFilter } from './nested-enum-login-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLoginStatusFilter } from './nested-enum-login-status-filter.input';

@InputType()
export class EnumLoginStatusWithAggregatesFilter {

    @Field(() => LoginStatus, {nullable:true})
    equals?: keyof typeof LoginStatus;

    @Field(() => [LoginStatus], {nullable:true})
    in?: Array<keyof typeof LoginStatus>;

    @Field(() => [LoginStatus], {nullable:true})
    notIn?: Array<keyof typeof LoginStatus>;

    @Field(() => NestedEnumLoginStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLoginStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLoginStatusFilter, {nullable:true})
    _min?: NestedEnumLoginStatusFilter;

    @Field(() => NestedEnumLoginStatusFilter, {nullable:true})
    _max?: NestedEnumLoginStatusFilter;
}
