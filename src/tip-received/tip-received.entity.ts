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
@Entity('TipReceived')
export class TipReceivedEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column()
  @CreateDateColumn()
  tanggal: Date;

  @Column('varchar', { length: 500 })
  supporter: string;

  @Column('varchar', { length: 500 })
  pesan_dukungan: string;

  @Column('numeric', {})
  nominal_dukungan: number;

  @Column('numeric', {})
  total_dukungan: number;

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
