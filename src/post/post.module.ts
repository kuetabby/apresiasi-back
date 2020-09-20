import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostEntity } from './post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, UserEntity])],
  providers: [PostResolver, PostService, UserService],
  exports: [PostService],
})
export class PostModule {}
