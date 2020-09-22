import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  // OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('Category')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column('varchar', { length: 500 })
  @Field(() => String)
  category: string;
}
