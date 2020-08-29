import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BalanceDTO } from './balance.dto';
import { BalanceEntity } from './balance.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(BalanceEntity)
    private tipReceivedRepository: Repository<BalanceEntity>,
  ) {}

  create(data: BalanceDTO): Promise<BalanceEntity> {
    return this.tipReceivedRepository.create({ ...data }).save();
  }

  findAll(): Promise<BalanceEntity[]> {
    return this.tipReceivedRepository.find();
  }

  findOneById(id: string): Promise<BalanceEntity> {
    return this.tipReceivedRepository.findOne({ id });
  }

  findTipReceivedByOwnerId(id: string): Promise<BalanceEntity[]> {
    return this.tipReceivedRepository.find({ id });
  }
}
