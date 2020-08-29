import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { PostDTO, PostInput, PostInputUpdate } from './post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Resolver(() => PostEntity)
export class PostResolver {
  constructor(
    @Inject(PostService)
    private postService: PostService,
  ) {}

  @Query(() => PostDTO)
  async getPost(@Args('id') id: string): Promise<PostEntity> {
    return this.postService.findOneById(id);
  }

  @Query(() => [PostDTO])
  async getAllPost(): Promise<PostEntity[]> {
    return await this.postService.findAll();
  }

  @Mutation(() => PostDTO)
  async createPost(@Args('data') data: PostInput): Promise<PostEntity> {
    const post = await this.postService.create({ ...data });
    return post;
  }

  @Mutation(() => PostDTO)
  async updatePost(@Args('data') data: PostInputUpdate): Promise<PostEntity> {
    return await this.postService.update({ ...data });
  }

  @Mutation(() => PostDTO)
  async deletePost(@Args('id') id: string): Promise<DeleteResult> {
    return await this.postService.delete(id);
  }
}
