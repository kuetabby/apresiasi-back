import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PostEntity } from '../post/post.entity';

@ObjectType()
@Entity('User')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { nullable: false })
  id: string;

  @Column('varchar', { length: 500, nullable: true, unique: true })
  @Field(() => String)
  email: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String)
  name: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  gender: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  address: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  profile_img: string;

  @Column('varchar', { length: 500, nullable: true, unique: true })
  @Field(() => String, { nullable: true })
  username: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  judul: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column('numeric', { nullable: true })
  @Field(() => String, { nullable: true })
  target_dana: string;

  @Column('numeric', { nullable: true })
  @Field(() => String, { nullable: true })
  phone: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  category: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  cover_img: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  is_page_active: string;

  @Column('int', { default: 0 })
  @Field(() => Number)
  balance: number;

  @OneToMany(
    () => PostEntity,
    post => post.owner,
    {
      eager: false,
      onDelete: 'CASCADE',
    },
  )
  posts: PostEntity[];

  // @OneToMany(
  //   () => PokemonEntity,
  //   pokemon => pokemon.owner,
  //   {
  //     eager: true,
  //     onDelete: 'CASCADE',
  //   },
  // )
  // @Field(() => [PokemonEntity])
  // pokemons: PokemonEntity[];
}
