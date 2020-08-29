import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DashboardDTO {
  @Field() readonly id: string;
  @Field() readonly tanggal: Date;
  @Field() readonly nominal: string;
  @Field() readonly total: number;
}
