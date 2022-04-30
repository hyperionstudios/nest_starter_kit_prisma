import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LoginCountOrderByAggregateInput } from './login-count-order-by-aggregate.input';
import { LoginMaxOrderByAggregateInput } from './login-max-order-by-aggregate.input';
import { LoginMinOrderByAggregateInput } from './login-min-order-by-aggregate.input';

@InputType()
export class LoginOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryFlag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LoginCountOrderByAggregateInput, {nullable:true})
    _count?: LoginCountOrderByAggregateInput;

    @Field(() => LoginMaxOrderByAggregateInput, {nullable:true})
    _max?: LoginMaxOrderByAggregateInput;

    @Field(() => LoginMinOrderByAggregateInput, {nullable:true})
    _min?: LoginMinOrderByAggregateInput;
}
