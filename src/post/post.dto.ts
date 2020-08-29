import { Field, ObjectType, InputType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class PostDTO {
  @Field() readonly id?: string;
  @Field() readonly tanggal?: Date;
  @Field() readonly title?: string;
  @Field() readonly announcement?: string;
}

@InputType()
export class PostInput {
  @Field() readonly title?: string;
  @Field() readonly announcement?: string;
}

@InputType()
export class PostInputUpdate extends PartialType(PostInput) {}
