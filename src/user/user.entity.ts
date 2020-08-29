import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  // OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('User')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('varchar', { length: 500, nullable: true, unique: true })
  email: string;

  @Column('varchar', { length: 500, nullable: true })
  name: string;

  @Column('numeric', { nullable: true })
  gender: number;

  @Column('varchar', { length: 500, nullable: true })
  address: string;

  @Column('varchar', { length: 500, nullable: true })
  profile_img: string;

  @Column('varchar', { length: 500, nullable: true, unique: true })
  username: string;

  @Column('varchar', { length: 500, nullable: true })
  judul: string;

  @Column('varchar', { length: 500, nullable: true })
  description: string;

  @Column('numeric', { nullable: true })
  target_dana: number;

  @Column('numeric', { nullable: true })
  category: number;

  @Column('varchar', { length: 500, nullable: true })
  cover_img: string;

  @Column('numeric', { nullable: true })
  is_page_active: number;

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
