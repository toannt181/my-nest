import { Injectable } from '@nestjs/common';
import { Dog } from 'src/models/dog.model';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [
    { id: 1, name: 'Toan', userId: 4 },
    { id: 2, name: 'Toan A', userId: 2 },
    { id: 3, name: 'Toan B', userId: 3 },
    { id: 4, name: 'Toan C', userId: 1 },
  ];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }

  findOne(id: number): Dog {
    return this.dogs.find((item) => item.id === id);
  }
}
