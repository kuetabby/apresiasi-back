import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DashboardEntity } from './dashboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DashboardEntity])],
  //   providers: [TipReceivedResolver, TipReceivedService],
  //   exports: [TipReceivedService],
})
export class DashboardModule {}
