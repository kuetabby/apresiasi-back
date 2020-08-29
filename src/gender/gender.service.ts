import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GenderEntity } from './gender.entity';
import { GenderDTO } from './gender.dto';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(GenderEntity)
    private genderRepository: Repository<GenderEntity>,
  ) {}

  create(data: GenderDTO): Promise<GenderEntity> {
    return this.genderRepository.create({ ...data }).save();
  }

  findAll(): Promise<GenderEntity[]> {
    return this.genderRepository.find();
  }

  findOneById(id: string): Promise<GenderEntity> {
    return this.genderRepository.findOne({ id });
  }
}
