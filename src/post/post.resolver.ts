import { Resolver, Context, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
// import { DeleteResult } from 'typeorm';

import {
  PostDTO,
  PostInput,
  PostInputUpdate,
  DeleteResponse,
} from './post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

import { AuthGuard } from '../user/user.guard';
import { UserEntity } from '../user/user.entity';

@Resolver(() => PostEntity)
export class PostResolver {
  constructor(
    @Inject(PostService)
    private postService: PostService,
  ) {}

  @Query(() => [PostEntity])
  @UseGuards(AuthGuard)
  async getPost(@Context('user') user: UserEntity): Promise<PostEntity[]> {
    return this.postService.findById(user.id);
  }

  @Query(() => PostEntity)
  @UseGuards(AuthGuard)
  async getPostById(@Args('id') id: string): Promise<PostEntity> {
    return this.postService.findOneById(id);
  }

  @Query(() => [PostEntity])
  async getAllPost(): Promise<PostEntity[]> {
    return await this.postService.findAll();
  }

  @Mutation(() => PostDTO)
  @UseGuards(AuthGuard)
  async createPost(
    @Args('data') data: PostInput,
    @Context('user') user: UserEntity,
  ): Promise<PostEntity> {
    console.log(user);
    const post = await this.postService.create({ ...data, ownerId: user.id });
    return post;
  }

  @Mutation(() => PostEntity)
  @UseGuards(AuthGuard)
  async updatePost(@Args('data') data: PostInputUpdate): Promise<PostEntity> {
    return await this.postService.update({ ...data });
  }

  @Mutation(() => DeleteResponse)
  async deletePost(@Args('id') id: string): Promise<DeleteResponse> {
    return await this.postService.delete(id);
  }
}
