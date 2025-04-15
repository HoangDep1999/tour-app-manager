import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { LoginUserDto } from './dto/login.dto';
import { Public } from './decorator/public.decorator';
import { Roles } from './decorator/role.decorator';
import { UserRoleEnum } from 'src/enum/user.role.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto, @Request() req) {
    return await this.authService.login(loginUserDto);
  }
}
