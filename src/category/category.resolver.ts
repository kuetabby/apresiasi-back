import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { CategoryDTO, CategoryInput } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

@Resolver(() => CategoryEntity)
export class CategoryResolver {
  constructor(
    @Inject(CategoryService)
    private genderService: CategoryService,
  ) {}

  @Query(() => [CategoryDTO])
  async getAllCategory(): Promise<CategoryEntity[]> {
    return await this.genderService.findAll();
  }

  @Query(() => CategoryDTO)
  async getCategory(@Args('id') id: string): Promise<CategoryEntity> {
    return this.genderService.findOneById(id);
  }

  @Mutation(() => CategoryDTO)
  async createCategory(
    @Args('data') data: CategoryInput,
  ): Promise<CategoryEntity> {
    const myPage = await this.genderService.create({ ...data });
    return myPage;
  }
}
