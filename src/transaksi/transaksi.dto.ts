import { Field, ObjectType, InputType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class TransaksiDTO {
  @Field() readonly id: string;
  @Field() readonly payment_amount: number;
  @Field() readonly payment_method: string;
  @Field() readonly customer_name: string;
  @Field() readonly pesan_dukungan: string;
  @Field() readonly email: string;
  @Field({ nullable: true }) readonly total: number;
}

@InputType()
export class TransaksiInput {
  @Field() readonly payment_amount: number;
  @Field() readonly payment_method: string;
  @Field() readonly customer_name: string;
  @Field() readonly pesan_dukungan: string;
  @Field() readonly email: string;
}

@InputType()
export class TransaksiInputUpdate extends PartialType(TransaksiInput) {}
