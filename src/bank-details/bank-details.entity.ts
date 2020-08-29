import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  // OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('BankDetails')
export class BankDetailsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column('varchar', { length: 500 })
  name: string;

  @Column('varchar', { length: 500 })
  bank_type: number;

  @Column('numeric', {})
  no_rekening: number;

  @Column('boolean', { default: false })
  isApproved: boolean;

  @Column('numeric', { nullable: true })
  total_balance: number;

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
