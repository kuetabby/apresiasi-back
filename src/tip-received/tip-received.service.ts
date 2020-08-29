import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TipReceivedDTO } from './tip-received.dto';
import { TipReceivedEntity } from './tip-received.entity';

@Injectable()
export class TipReceivedService {
  constructor(
    @InjectRepository(TipReceivedEntity)
    private tipReceivedRepository: Repository<TipReceivedEntity>,
  ) {}

  create(data: TipReceivedDTO): Promise<TipReceivedEntity> {
    return this.tipReceivedRepository.create({ ...data }).save();
  }

  findAll(): Promise<TipReceivedEntity[]> {
    return this.tipReceivedRepository.find();
  }

  findOneById(id: string): Promise<TipReceivedEntity> {
    return this.tipReceivedRepository.findOne({ id });
  }

  findTipReceivedByOwnerId(id: string): Promise<TipReceivedEntity[]> {
    return this.tipReceivedRepository.find({ id });
  }
}
