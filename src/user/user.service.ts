import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import * as jwt from 'jsonwebtoken';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
import { JwtPayloadDTO } from './jwt_payload.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  createToken(id: string, email: string): { accessToken: string } {
    const jwtPayload: JwtPayloadDTO = {
      id,
      email,
    };

    const accessToken = jwt.sign(jwtPayload, 'secret', { expiresIn: 36000 });
    return { accessToken: `Bearer ${accessToken}` };
  }

  create(data: UserDTO): Promise<UserEntity> {
    return this.userRepository.create({ ...data }).save();
  }

  findOneById(id: string): Promise<UserEntity> {
    return this.userRepository.findOne({ id });
  }

  findOneByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ email });
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async sumBalance(userId: string, balance: number): Promise<void> {
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw NotFoundException;
    }
    user.balance = user.balance + balance;
    await user.save();
  }

  // async update(data: UserDTO): Promise<UserEntity> {
  //   const user = await this.userRepository.findOne(data.id);
  //   user.judul = data.judul;
  //   user.description = data.description;
  //   user.target_dana = data.target_dana;
  //   user.status = data.status;
  //   user.summary = data.summary;
  //   user.category = data.category;
  //   await user.save();
  //   return user;
  // }

  // async delete(id: string): Promise<DeleteResult> {
  //   const user = await this.userRepository.delete({ id });

  //   if (user.affected === 0) {
  //     throw new NotFoundException(`ID ${id} not found`);
  //   }

  //   return user;
  // }
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
