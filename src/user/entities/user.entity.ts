import { AbstractEntity } from 'src/database/abstract.entity';
import { UserRoleEnum } from 'src/enum/user.role.enum';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('user')
export class User extends AbstractEntity<User> {
  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.CUSTOMER,
  })
  role: UserRoleEnum;

  @OneToMany(() => TourTicketDetail, (tour) => tour.user)
  tours: TourTicketDetail[];

  @Column({ nullable: true })
  isActive: boolean;
}
