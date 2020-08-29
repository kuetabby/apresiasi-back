import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { GenderDTO, GenderInput } from './gender.dto';
import { GenderEntity } from './gender.entity';
import { GenderService } from './gender.service';

@Resolver(() => GenderEntity)
export class GenderResolver {
  constructor(
    @Inject(GenderService)
    private genderService: GenderService,
  ) {}

  @Query(() => [GenderDTO])
  async getAllGender(): Promise<GenderEntity[]> {
    return await this.genderService.findAll();
  }

  @Query(() => GenderDTO)
  async getGender(@Args('id') id: string): Promise<GenderEntity> {
    return this.genderService.findOneById(id);
  }

  @Mutation(() => GenderDTO)
  async createGender(@Args('data') data: GenderInput): Promise<GenderEntity> {
    const myPage = await this.genderService.create({ ...data });
    return myPage;
  }
}
