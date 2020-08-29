import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  // OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('Gender')
export class GenderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column('varchar', { length: 500 })
  gender: string;
}
