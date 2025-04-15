import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);
    if (user) {
      const verifyPassword = await bcrypt.compare(pass, user?.password);
      if (!verifyPassword) throw new BadRequestException('Incorrect password');
      const { password, ...result } = user;
      return result;
    }
  }
  async login(loginUserDto: LoginUserDto) {
    const userExist = await this.userService.findUserByUsername(loginUserDto.username);
    if (!userExist) throw new NotFoundException('User has not registered yet');
    const payload: JwtPayload = {
      id: userExist.id,
      email: userExist.email,
      role: userExist.role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.tokenService.generateAccessToken(payload),
      this.tokenService.generateRefreshToken(payload),
    ]);

    // await this.refreshTokenService.create({ token: refreshToken, user_id: userExist.id,})
    return { accessToken, refreshToken };
  }
}
