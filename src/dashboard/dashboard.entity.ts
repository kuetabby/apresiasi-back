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
@Entity('Dashboard')
export class DashboardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column()
  @CreateDateColumn()
  tanggal: Date;

  @Column('numeric', {})
  nominal: number;

  @Column('numeric', {})
  total: number;
}
