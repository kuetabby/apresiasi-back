import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BaseEntity,
  // OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('Post')
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column()
  @CreateDateColumn()
  tanggal: Date;

  @Column('varchar', { length: 500 })
  title: string;

  @Column('varchar', { length: 500 })
  announcement: string;

  @Column('varchar', { length: 500, nullable: true })
  post_img: string;

  //   @Column()
  //   @UpdateDateColumn()
  //   updatedAt: Date;

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
