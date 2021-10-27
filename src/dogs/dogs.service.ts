import { Injectable } from '@nestjs/common';
import Dog from 'src/interfaces/dog';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [
    { id: 1, name: 'Toan' },
    { id: 2, name: 'Toan A' },
    { id: 3, name: 'Toan B' },
    { id: 4, name: 'Toan C' },
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
