import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/roles.guard';
import { LocalStrategy } from './strategy/local.strategy';
import { TokenService } from './token.service';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, TokenService, RolesGuard, JwtAuthGuard],
  exports: [AuthService, TokenService],
})
export class AuthModule {}
