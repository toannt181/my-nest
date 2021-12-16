import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Dog } from 'src/models/dog.model';
import { User } from 'src/models/user.model';
import { UsersService } from 'src/users/users.service';
import { DogsService } from './dogs.service';

@Resolver((of) => Dog)
export class DogsResolver {
  constructor(
    private dogsService: DogsService,
    private usersService: UsersService,
  ) {}

  @Query((returns) => Dog)
  async getDog(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
  ) {
    return await this.dogsService.findOne(id);
  }

  @ResolveField('user', (returns) => User)
  async getUser(@Parent() dog: Dog) {
    const id = dog.userId;
    return await this.usersService.findOne(id);
  }
}
