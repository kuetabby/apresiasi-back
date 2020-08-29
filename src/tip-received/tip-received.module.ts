import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TipReceivedEntity } from './tip-received.entity';
import { TipReceivedResolver } from './tip-received.resolver';
import { TipReceivedService } from './tip-received.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipReceivedEntity])],
  providers: [TipReceivedResolver, TipReceivedService],
  exports: [TipReceivedService],
})
export class TipReceivedModule {}
