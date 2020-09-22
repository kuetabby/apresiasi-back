import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class CategoryDTO {
  @Field() readonly id?: string;
  @Field() readonly category?: string;
}

@InputType()
export class CategoryInput {
  @Field() readonly category?: string;
}

// @InputType()
// export class PokemonInputUpdate {
//   @Field() readonly id: string;
//   @Field() readonly name: string;
//   @Field() readonly type: string;
//   @Field() readonly pokedex: number;
// }
