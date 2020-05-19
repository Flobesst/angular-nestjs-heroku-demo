import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('api/users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
