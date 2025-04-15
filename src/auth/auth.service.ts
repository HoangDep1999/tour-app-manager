import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtSerivce: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findUserByEmail(loginUserDto.email);
    if (user) {
      const verifyPassword = await bcrypt.compare(loginUserDto.password, user?.password);
      if (!verifyPassword) throw new BadRequestException('Incorrect password');
      const { password, ...result } = user;
      return result;
    }
  }
}
