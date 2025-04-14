import { CruiseActivity } from 'src/cruise-activity/entities/cruise-activity.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Schedule } from 'src/schedule/entities/schedule.entity';
import { TicketTransaction } from 'src/ticket-transaction/entities/ticket-transaction.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('tourticketdetail')
export class TourTicketDetail extends AbstractEntity<TourTicketDetail> {
  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  departure_from: string;

  @Column()
  itinerary: string;

  @Column()
  media: string;

  @OneToMany(() => CruiseActivity, (activity) => activity.tourTicket)
  cruiseActivities: CruiseActivity[];

  @OneToMany(() => Schedule, (schedule) => schedule.tourTicket)
  schedules: Schedule[];

  @ManyToOne(() => User, (user) => user.tours, { onDelete: 'SET NULL' })
  user: User;

  @ManyToOne(() => Tour, (tour) => tour.tickets, { onDelete: 'CASCADE' })
  tour: Tour;

  @OneToMany(() => TicketTransaction, (sale) => sale.ticket)
  sales: TicketTransaction[];
}
