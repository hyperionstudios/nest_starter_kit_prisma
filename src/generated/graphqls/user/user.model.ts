import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Login } from '../login/login.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    /** @DtoCreateOptional\n@DtoUpdateOptional */
    @Field(() => ID, {nullable:false,description:'@DtoCreateOptional\\n@DtoUpdateOptional'})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    /** @DtoCreateOptional\n@DtoUpdateOptional */
    @Field(() => [Login], {nullable:true,description:'@DtoCreateOptional\\n@DtoUpdateOptional'})
    logins?: Array<Login>;

    /** @DtoCreateOptional\n@DtoUpdateHidden\n@DtoUpdateOptional */
    @Field(() => Date, {nullable:false,description:'@DtoCreateOptional\\n@DtoUpdateHidden\\n@DtoUpdateOptional'})
    createdAt!: Date;

    /** @DtoUpdateHidden\n@DtoUpdateOptional\n@DtoCreateOptional */
    @Field(() => Date, {nullable:false,description:'@DtoUpdateHidden\\n@DtoUpdateOptional\\n@DtoCreateOptional'})
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
