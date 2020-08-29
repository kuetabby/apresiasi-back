import { Field, ObjectType, InputType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class TipReceivedDTO {
  @Field() readonly id?: string;
  @Field() readonly tanggal?: Date;
  @Field() readonly supporter?: string;
  @Field() readonly pesan_dukungan?: string;
  @Field() readonly nominal_dukungan?: number;
  @Field() readonly total_dukungan?: number;
}

@InputType()
export class TipReceivedInput {
  @Field() readonly supporter?: string;
  @Field() readonly pesan_dukungan?: string;
  @Field() readonly nominal_dukungan?: number;
  @Field() readonly total_dukungan?: number;
}

@InputType()
export class TipReceivedInputUpdate extends PartialType(TipReceivedInput) {}

// @InputType()
// export class PokemonInputUpdate {
//   @Field() readonly id: string;
//   @Field() readonly name: string;
//   @Field() readonly type: string;
//   @Field() readonly pokedex: number;
// }
