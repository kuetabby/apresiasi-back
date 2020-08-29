import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BankDetailsEntity } from './bank-details.entity';
import { BankDetailsResolver } from './bank-details.resolver';
import { BankDetailsService } from './bank-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([BankDetailsEntity])],
  providers: [BankDetailsResolver, BankDetailsService],
  exports: [BankDetailsService],
})
export class BankDetailsModule {}
