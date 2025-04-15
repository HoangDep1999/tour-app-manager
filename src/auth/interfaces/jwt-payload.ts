import { UserRoleEnum } from 'src/enum/user.role.enum';

export interface JwtPayload {
  id: number;
  email: string;
  role: UserRoleEnum;
}
