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
  @Field() readonly customer_name: string;
  @Field() readonly pesan_dukungan: string;
  @Field() readonly email: string;
  @Field() readonly recipient_id: string;
  @Field() readonly phoneNumber: string;
}

@InputType()
export class TransaksiInputUpdate extends PartialType(TransaksiInput) {}

export class DuitkuRequestTransactionDto {
  paymentAmount: number;
  merchantOrderId: string;
  productDetails: string;
  merchantUserInfo: string;
  email: string;
  phoneNumber: string;
}

export class DuitkuRequestTransactionResponse {
  merchantCode: string;
  reference: string;
  paymentUrl: string;
  amount: string;
  statusCode: string;
  statusMessage: string;
}

export class DuitkuCallbackDto {
  merchantCode: string;
  amount: string;
  merchantOrderId: string;
  productDetail: string;
  paymentCode: string;
  resultCode: string;
  merchantUserId: string;
  reference: string;
  signature: string;
}
