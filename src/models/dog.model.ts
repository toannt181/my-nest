import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Dog {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => Int)
  userId: number;
}
