import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';
import { TransaksiEntity } from './transaksi.entity';
import { TransaksiInput } from './transaksi.dto';
import { UserEntity } from 'user/user.entity';
import { AuthGuard } from 'user/user.guard';

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

  @Query(() => [TransaksiEntity])
  async getCurrentUserTransactionById(
    @Args('id') id: string,
  ): Promise<TransaksiEntity[]> {
    return this.transaksiService.getCurrentUserTransaction(id);
  }

  @Query(() => [TransaksiEntity])
  @UseGuards(AuthGuard)
  async getCurrentUserTransaction(
    @Context('user') user: UserEntity,
  ): Promise<TransaksiEntity[]> {
    return this.transaksiService.getCurrentUserTransaction(user.id);
  }
}
