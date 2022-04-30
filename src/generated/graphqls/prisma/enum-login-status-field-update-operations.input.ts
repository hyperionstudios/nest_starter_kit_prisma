import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginStatus } from './login-status.enum';

@InputType()
export class EnumLoginStatusFieldUpdateOperationsInput {

    @Field(() => LoginStatus, {nullable:true})
    set?: keyof typeof LoginStatus;
}
