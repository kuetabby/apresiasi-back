import { Controller, Post, Body } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';
import { DuitkuCallbackDto } from './transaksi.dto';
import { TransaksiStatus } from './transaksi.entity';

@Controller('transaksi')
export class TransaksiController {
  constructor(private readonly transaksiService: TransaksiService) {}

  @Post('/callback')
  async callbackTransaction(@Body() dto: DuitkuCallbackDto): Promise<void> {
    const status =
      dto.resultCode === '00'
        ? TransaksiStatus.SUCCESS
        : TransaksiStatus.FAILED;
    await this.transaksiService.updateStatus(dto.merchantOrderId, status);
  }
}
