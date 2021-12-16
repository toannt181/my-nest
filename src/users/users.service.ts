import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'Toan', age: 10 },
    { id: 2, name: 'Toan A', age: 20 },
    { id: 3, name: 'Toan B', age: 130 },
    { id: 4, name: 'Toan C', age: 40 },
  ];

  findOne(id: number): User {
    return this.users.find((item) => item.id === id);
  }
}
