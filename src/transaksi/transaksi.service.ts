import {
  Injectable,
  Inject,
  HttpService,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as Crypto from 'crypto-js';

import { TransaksiEntity, TransaksiStatus } from './transaksi.entity';
import {
  TransaksiInput,
  DuitkuRequestTransactionResponse,
  DuitkuRequestTransactionDto,
} from './transaksi.dto';
import { UserService } from 'user/user.service';

@Injectable()
export class TransaksiService {
  constructor(
    @InjectRepository(TransaksiEntity)
    private transaksiRepository: Repository<TransaksiEntity>,
    @Inject(UserService) private userService: UserService,
    private httpService: HttpService,
  ) {}

  async create(dto: TransaksiInput): Promise<TransaksiEntity> {
    const transaksi = await this.transaksiRepository.create(dto).save();
    const inquryTrx = await this.requestTransaction({
      email: dto.email,
      merchantOrderId: transaksi.id,
      merchantUserInfo: dto.customer_name,
      paymentAmount: dto.payment_amount,
      productDetails: dto.pesan_dukungan,
      phoneNumber: dto.phone_number,
      paymentMethod: dto.payment_method,
    });

    transaksi.url_pembayaran = inquryTrx.paymentUrl;
    transaksi.duitku_reference = inquryTrx.reference;

    await transaksi.save();
    return transaksi;
  }

  async updateStatus(id: string, status: TransaksiStatus): Promise<void> {
    const transaksi = await this.transaksiRepository.findOne(id);
    if (!transaksi) {
      throw NotFoundException;
    }
    transaksi.status = status;
    await Promise.all([
      transaksi.save(),
      this.userService.sumBalance(
        transaksi.recipient_id,
        parseInt(transaksi.payment_amount),
      ),
    ]);
  }

  async requestTransaction(
    dto: DuitkuRequestTransactionDto,
  ): Promise<DuitkuRequestTransactionResponse> {
    const body = {
      merchantCode: 'D6194', //@TODO merchantCode dari dashboard duitku
      paymentAmount: `${dto.paymentAmount}`,
      paymentMethod: dto.paymentMethod,
      merchantOrderId: dto.merchantOrderId,
      productDetails: dto.productDetails,
      merchantUserInfo: dto.merchantUserInfo,
      phoneNumber: dto.phoneNumber,
      email: dto.email,
      callbackUrl: 'https://e5e026087b5b.ngrok.io/transaksi/callback', // @TODO ganti base url
      expiryPeriod: '60',
      signature: Crypto.MD5(
        `D6194${dto.merchantOrderId}${dto.paymentAmount}397f3988f6ad9b82c7e7ed6a92c103e0`, // @TODO merchantKey dari dashboar duitku
      ).toString(),
    };

    try {
      const res = await this.httpService.post<DuitkuRequestTransactionResponse>(
        'https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry',
        body,
      );
      const { data } = await res.toPromise();
      console.log(data);
      if (data.statusCode !== '00') {
        throw InternalServerErrorException;
      }

      return data;
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  }

  async getCurrentUserTransaction(userId: string): Promise<TransaksiEntity[]> {
    const transactions = await this.transaksiRepository.find({
      recipient_id: userId,
      status: TransaksiStatus.SUCCESS,
    });
    return transactions;
  }
}
