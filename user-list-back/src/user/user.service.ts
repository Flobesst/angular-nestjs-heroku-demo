import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {

  private users: User[] = [];

  constructor() {
    this.users.push(
      new User(1, 'Jack'),
      new User(2, 'Kate'),
      new User(3, 'Locke'),
      new User(4, 'Benjamin'),
      new User(5, 'Walt'),
    );
  }

  findAll(): Promise<User[]> {
    return new Promise<User[]>(resolve => resolve(this.users));
  }
}
