import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';

import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserDTO, LoginResponseDTO, LoginInput } from './user.dto';
import { AuthGuard } from './user.guard';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  @Query(() => UserEntity)
  @UseGuards(AuthGuard)
  async getUser(@Context('user') user: UserEntity): Promise<UserEntity> {
    return this.userService.findOneByEmail(user.email);
  }

  @Query(() => [UserDTO])
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => LoginResponseDTO)
  async loginUser(
    @Args('data') data: LoginInput,
  ): Promise<{ accessToken: string }> {
    let user = await this.userService.findOneByEmail(data.email);
    if (!user) {
      user = await this.userService.create({ ...data });
    }
    return this.userService.createToken(user.id, user.email);
  }

  // @Mutation(() => UserDTO)
  // async updateUser(@Args('data') data: UserInput): Promise<UserEntity> {
  //   return await this.userService.update({ ...data });
  // }

  // @Mutation(() => UserDTO)
  // async deleteUser(@Args('id') id: string): Promise<DeleteResult> {
  //   return await this.userService.delete(id);
  // }
}
