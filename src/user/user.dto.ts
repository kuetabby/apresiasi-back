import { Field, ObjectType, InputType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
  @Field() readonly id?: string;
  @Field({ nullable: true }) readonly name?: string;
  @Field({ nullable: true }) readonly gender?: string;
  @Field({ nullable: true }) readonly email?: string;
  @Field({ nullable: true }) readonly address?: string;
  @Field({ nullable: true }) readonly profile_img?: string;
  @Field({ nullable: true }) readonly username?: string;
  @Field({ nullable: true }) readonly judul?: string;
  @Field({ nullable: true }) readonly description?: string;
  @Field({ nullable: true }) readonly target_dana?: string;
  @Field({ nullable: true }) readonly phone?: string;
  @Field({ nullable: true }) readonly category?: string;
  @Field({ nullable: true }) readonly cover_img?: string;
  @Field({ nullable: true }) readonly is_page_active?: string;
  @Field({ nullable: true }) readonly balance?: number;
}

@InputType()
class PageInput {
  @Field() readonly name?: string;
  @Field() readonly gender?: string;
  @Field() readonly email?: string;
  @Field() readonly address?: string;
  @Field() readonly profile_img?: string;
  @Field() readonly username?: string;
  @Field() readonly judul?: string;
  @Field() readonly description?: string;
  @Field() readonly target_dana?: string;
  @Field() readonly category?: string;
  @Field() readonly phone?: string;
  @Field() readonly status?: string;
  @Field() readonly cover_img?: string;
  @Field() readonly is_page_active?: string;
}

@InputType()
export class UserInput extends PartialType(PageInput) {}

@InputType()
export class LoginInput {
  @Field() readonly name?: string;
  @Field() readonly email?: string;
}

@ObjectType()
export class LoginResponseDTO {
  @Field()
  accessToken: string;
}

// @InputType()
// export class PokemonInputUpdate {
//   @Field() readonly id: string;
//   @Field() readonly name: string;
//   @Field() readonly type: string;
//   @Field() readonly pokedex: number;
// }
