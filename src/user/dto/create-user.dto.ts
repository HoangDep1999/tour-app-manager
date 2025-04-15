import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Tên bắt buộc phải là chữ' })
  @MinLength(3, { message: 'Tên phải có ít nhất 3 ký tự' })
  fullName: string;

  @IsString({ message: 'Tên bắt buộc phải là chữ' })
  @MinLength(3, { message: 'Tên phải có ít nhất 3 ký tự' })
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
  password: string;
}
