import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from './category.entity';
import { CategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  create(data: CategoryDTO): Promise<CategoryEntity> {
    return this.categoryRepository.create({ ...data }).save();
  }

  findAll(): Promise<CategoryEntity[]> {
    return this.categoryRepository.find();
  }

  findOneById(id: string): Promise<CategoryEntity> {
    return this.categoryRepository.findOne({ id });
  }
}
