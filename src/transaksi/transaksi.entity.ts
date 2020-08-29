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
@Entity('Transaksi')
export class TransaksiEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @CreateDateColumn()
  payment_tanggal: Date;

  @Column('numeric', {})
  payment_amount: string;

  @Column('varchar', { length: 500 })
  payment_method: string;

  @Column('varchar', { length: 500 })
  customer_name: string;

  @Column('varchar', { length: 500 })
  pesan_dukungan: string;

  @Column('varchar', { length: 500 })
  email: string;

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
