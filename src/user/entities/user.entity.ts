import { AbstractEntity } from 'src/database/abstract.entity';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail';
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

  @Column({ default: 'customer' })
  role: string;

  @OneToMany(() => TourTicketDetail, (tour) => tour.user)
  tours: TourTicketDetail[];
}
