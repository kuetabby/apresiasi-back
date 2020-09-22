import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
  // OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity';

@ObjectType()
@Entity('Post')
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column({ nullable: true, type: 'datetime' })
  @CreateDateColumn()
  @Field(() => Date, { nullable: true })
  tanggal: Date;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  title: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
  announcement: string;

  @Column('varchar', { length: 500, nullable: true })
  @Field(() => String, { nullable: true })
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
  @ManyToOne(
    () => UserEntity,
    user => user.posts,
    {
      eager: true,
      onDelete: 'CASCADE',
    },
  )
  @Field(() => UserEntity)
  owner: UserEntity;

  @Column()
  @Field(() => String)
  ownerId?: string;
  // @Field(() => [PokemonEntity])
  // pokemons: PokemonEntity[];
}
