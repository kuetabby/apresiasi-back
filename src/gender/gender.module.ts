import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GenderEntity } from './gender.entity';
import { GenderResolver } from './gender.resolver';
import { GenderService } from './gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenderEntity])],
  providers: [GenderResolver, GenderService],
  exports: [GenderService],
})
export class GenderModule {}
