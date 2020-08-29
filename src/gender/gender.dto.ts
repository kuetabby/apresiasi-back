import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class GenderDTO {
  @Field() readonly id?: string;
  @Field() readonly gender?: string;
}

@InputType()
export class GenderInput {
  @Field() readonly gender?: string;
}

// @InputType()
// export class PokemonInputUpdate {
//   @Field() readonly id: string;
//   @Field() readonly name: string;
//   @Field() readonly type: string;
//   @Field() readonly pokedex: number;
// }
