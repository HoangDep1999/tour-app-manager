import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('/register')
  async register(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }
}
