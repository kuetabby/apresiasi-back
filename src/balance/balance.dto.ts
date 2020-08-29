import { Field, ObjectType, InputType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class BalanceDTO {
  @Field() readonly id?: string;
  @Field() readonly tanggal?: Date;
  @Field() readonly description?: string;
  @Field() readonly jumlah?: number;
}

@InputType()
export class BalanceInput {
  @Field() readonly description?: string;
  @Field() readonly jumlah?: number;
}

@InputType()
export class BalanceInputUpdate extends PartialType(BalanceInput) {}
