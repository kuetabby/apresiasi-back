import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { BalanceEntity } from './balance.entity';
import { BalanceDTO, BalanceInput } from './balance.dto';
import { BalanceService } from './balance.service';

@Resolver(() => BalanceEntity)
export class BalanceResolver {
  constructor(
    @Inject(BalanceService)
    private balanceService: BalanceService,
  ) {}

  @Query(() => [BalanceDTO])
  async getAllBalance(): Promise<BalanceEntity[]> {
    return await this.balanceService.findAll();
  }

  @Query(() => BalanceDTO)
  async getBalance(@Args('id') id: string): Promise<BalanceEntity> {
    return this.balanceService.findOneById(id);
  }

  @Mutation(() => BalanceDTO)
  async createBalance(
    @Args('data') data: BalanceInput,
  ): Promise<BalanceEntity> {
    const myPage = await this.balanceService.create({ ...data });
    return myPage;
  }
}
