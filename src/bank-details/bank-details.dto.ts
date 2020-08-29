import { Field, ObjectType, InputType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class BankDetailsDTO {
  @Field() readonly id?: string;
  @Field() readonly name?: string;
  @Field() readonly bank_type?: number;
  @Field() readonly no_rekening?: number;
  @Field() readonly isApproved?: boolean;
  @Field({ nullable: true }) readonly total_balance?: number;
}

@InputType()
export class BankDetailsInput {
  @Field() readonly name?: string;
  @Field() readonly bank_type?: number;
  @Field() readonly no_rekening?: number;
}

@InputType()
export class BankDetailsInputUpdate extends PartialType(BankDetailsInput) {}

// @InputType()
// export class PokemonInputUpdate {
//   @Field() readonly id: string;
//   @Field() readonly name: string;
//   @Field() readonly type: string;
//   @Field() readonly pokedex: number;
// }
