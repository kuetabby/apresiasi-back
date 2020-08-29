import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { TipReceivedService } from './tip-received.service';
import { TipReceivedDTO, TipReceivedInput } from './tip-received.dto';
import { TipReceivedEntity } from './tip-received.entity';

@Resolver(() => TipReceivedEntity)
export class TipReceivedResolver {
  constructor(
    @Inject(TipReceivedService)
    private tipReceivedService: TipReceivedService,
  ) {}

  @Query(() => [TipReceivedDTO])
  async getAllTipReceived(): Promise<TipReceivedEntity[]> {
    return await this.tipReceivedService.findAll();
  }

  @Query(() => TipReceivedDTO)
  async getTipReceived(@Args('id') id: string): Promise<TipReceivedEntity> {
    return this.tipReceivedService.findOneById(id);
  }

  @Mutation(() => TipReceivedDTO)
  async createTipReceived(
    @Args('data') data: TipReceivedInput,
  ): Promise<TipReceivedEntity> {
    const myPage = await this.tipReceivedService.create({ ...data });
    return myPage;
  }
}
