import { ConflictException, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { ConfigService } from '@nestjs/config';
import { UserRoleEnum } from 'src/enum/user.role.enum';
@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { email, username, password } = createUserDto;
    const emailExist = await this.userRepository.findOneByField('email', email);
    const usernameExist = await this.userRepository.findOneByField('username', username);
    if (emailExist) throw new ConflictException('Email has been registered');
    if (usernameExist) throw new ConflictException('Username has been registered');
    // ConflictException dùng trong trường hợp dữ liệu trùng hoặc gây xung đột
    // BadRequestException dùng để bắt những dữ liệu sai cú pháp, sai format, thiếu field, hoặc validation không hợp lệ

    const hashPassword = await bcrypt.hash(password, 10);
    return await this.userRepository.save({ ...createUserDto, password: hashPassword });
  }

  // Interface OnApplicationBootstrap sẽ được gọi khi ứng dụng bắt đầu start 1 lần duy nhất và
  // nó chỉ gọi đến hàm onApplicationBootstrap
  async onApplicationBootstrap() {
    const existUser = await this.userRepository.findOneByField('username', 'superadmin');
    if (!existUser) {
      const adminPassword = this.configService.get('DEFAULT_ADMIN_PASSWORD');
      const hashPassword = await bcrypt.hash(adminPassword, 10);
      await this.userRepository.save({
        fullName: 'Super Admin',
        username: 'superadmin',
        email: 'superadmin@gmail.com',
        password: hashPassword,
        role: UserRoleEnum.SUPER_ADMIN,
      });
      console.log('Created user successfully');
    } else {
      console.log('Super Admin has been registered');
    }
  }
  async findUserByUsername(username: string) {
    return await this.userRepository.findOneByField('username', username);
  }

  async findById(id: number) {
    return await this.userRepository.findById(id);
  }
}
