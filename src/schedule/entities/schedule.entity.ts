import { AbstractEntity } from 'src/database/abstract.entity';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('schedule')
export class Schedule extends AbstractEntity<Schedule> {
  @Column()
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => TourTicketDetail, (tour) => tour.schedules, { onDelete: 'CASCADE' })
  tourTicket: TourTicketDetail;
}
