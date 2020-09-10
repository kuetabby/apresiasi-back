import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';
import { TransaksiEntity } from './transaksi.entity';
import { TransaksiInput } from './transaksi.dto';

@Resolver('Transaksi')
export class TransaksiResolver {
  constructor(
    @Inject(TransaksiService) private transaksiService: TransaksiService,
  ) {}

  @Mutation(() => TransaksiEntity)
  async createTransaction(
    @Args('data') data: TransaksiInput,
  ): Promise<TransaksiEntity> {
    return this.transaksiService.create(data);
  }
}
