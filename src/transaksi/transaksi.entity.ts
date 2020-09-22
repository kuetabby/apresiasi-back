import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from 'user/user.entity';

export enum TransaksiStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

@ObjectType()
@Entity('Transaksi')
export class TransaksiEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @CreateDateColumn()
  @Field(() => Date)
  payment_tanggal: Date;

  @Column('varchar', { default: '' })
  @Field(() => String)
  payment_amount: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  customer_name: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  pesan_dukungan: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  email: string;

  @Column('varchar', { length: 500, default: '' })
  @Field(() => String)
  url_pembayaran: string;

  @Column({ default: TransaksiStatus.PENDING })
  @Field(() => String)
  status: TransaksiStatus;

  @ManyToOne(() => UserEntity, { eager: false })
  @Field(() => UserEntity, { nullable: true })
  recipient: UserEntity;

  @Column({ nullable: false })
  @Field(() => String)
  recipient_id: string;

  @Column({ nullable: true })
  @Field(() => String)
  duitku_reference: string;
}
