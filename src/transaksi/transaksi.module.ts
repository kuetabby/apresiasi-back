import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransaksiEntity } from './transaksi.entity';
import { TransaksiResolver } from './transaksi.resolver';
import { TransaksiService } from './transaksi.service';
import { UserModule } from 'user/user.module';
import { TransaksiController } from './transaksi.controller';

@Module({
  imports: [
    UserModule,
    HttpModule,
    TypeOrmModule.forFeature([TransaksiEntity]),
  ],
  providers: [TransaksiResolver, TransaksiService],
  exports: [],
  controllers: [TransaksiController],
})
export class TransaksiModule {}
