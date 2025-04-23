import { AbstractEntity } from 'src/database/abstract.entity';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('cruise_activity')
export class CruiseActivity extends AbstractEntity<CruiseActivity> {
  @Column()
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => TourTicketDetail, (tour) => tour.cruiseActivities, { onDelete: 'CASCADE' })
  tourTicket: TourTicketDetail;
}
