import {
  Inject,
  // UseGuards
} from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { BankDetailsEntity } from './bank-details.entity';
import {
  BankDetailsDTO,
  BankDetailsInput,
  BankDetailsInputUpdate,
} from './bank-details.dto';
import { BankDetailsService } from './bank-details.service';

@Resolver(() => BankDetailsEntity)
export class BankDetailsResolver {
  constructor(
    @Inject(BankDetailsService)
    private bankDetailsService: BankDetailsService,
  ) {}

  @Query(() => BankDetailsDTO)
  async getBankDetails(@Args('id') id: string): Promise<BankDetailsEntity> {
    return this.bankDetailsService.findOneById(id);
  }

  @Mutation(() => BankDetailsDTO)
  async createBankDetails(
    @Args('data') data: BankDetailsInput,
  ): Promise<BankDetailsEntity> {
    const bankDetails = await this.bankDetailsService.create({ ...data });
    return bankDetails;
  }

  @Mutation(() => BankDetailsDTO)
  async updateBankDetails(
    @Args('data') data: BankDetailsInputUpdate,
  ): Promise<BankDetailsEntity> {
    return await this.bankDetailsService.update({ ...data });
  }
}
