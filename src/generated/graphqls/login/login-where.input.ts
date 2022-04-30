import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumLoginStatusFilter } from '../prisma/enum-login-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LoginWhereInput {

    @Field(() => [LoginWhereInput], {nullable:true})
    AND?: Array<LoginWhereInput>;

    @Field(() => [LoginWhereInput], {nullable:true})
    OR?: Array<LoginWhereInput>;

    @Field(() => [LoginWhereInput], {nullable:true})
    NOT?: Array<LoginWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ip?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deviceId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deviceType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryFlag?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => EnumLoginStatusFilter, {nullable:true})
    status?: EnumLoginStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
