import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';

import { BankDetailsEntity } from './bank-details.entity';
import { BankDetailsDTO } from './bank-details.dto';

@Injectable()
export class BankDetailsService {
  constructor(
    @InjectRepository(BankDetailsEntity)
    private bankDetailsEntity: Repository<BankDetailsEntity>,
  ) {}

  create(data: BankDetailsDTO): Promise<BankDetailsEntity> {
    return this.bankDetailsEntity.create({ ...data }).save();
  }

  async update(data: BankDetailsDTO): Promise<BankDetailsEntity> {
    const bankDetails = await this.bankDetailsEntity.findOne(data.id);
    bankDetails.name = data.name;
    bankDetails.no_rekening = data.no_rekening;
    bankDetails.bank_type = data.bank_type;
    await bankDetails.save();
    return bankDetails;
  }

  findOneById(id: string): Promise<BankDetailsEntity> {
    return this.bankDetailsEntity.findOne({ id });
  }
}

//   findOneById(userId: string): Promise<UserEntity> {
//     return this.usersRepository.findOne(userId);
//   }

//   findAll(): Promise<UserEntity[]> {
//     return this.usersRepository.find();
//   }

//   findByName(name: string): Promise<UserEntity> {
//     return this.usersRepository.findOne({ name });
//   }

//   findByEmail(email: string): Promise<UserEntity> {
//     return this.usersRepository.findOne({ email });
//   }

//   create(data: UserDTO): Promise<UserEntity> {
//     return this.usersRepository.create({ ...data }).save();
//   }
// }
