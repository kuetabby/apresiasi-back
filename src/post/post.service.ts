import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';

import { PostEntity } from './post.entity';
import { PostDTO } from './post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  create(data: PostDTO): Promise<PostEntity> {
    return this.postRepository.create({ ...data }).save();
  }

  async update(data: PostDTO): Promise<PostEntity> {
    const post = await this.postRepository.findOne(data.id);
    post.title = data.title;
    post.announcement = data.announcement;
    await post.save();
    return post;
  }

  async delete(id: string): Promise<DeleteResult> {
    const post = await this.postRepository.delete({ id });

    if (post.affected === 0) {
      throw new NotFoundException(`ID ${id} not found`);
    }

    return post;
  }

  findOneById(id: string): Promise<PostEntity> {
    return this.postRepository.findOne({ id });
  }

  findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
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
