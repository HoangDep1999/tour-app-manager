import { AbstractEntity } from 'src/database/abstract.entity';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('tour')
export class Tour extends AbstractEntity<Tour> {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  itinerary: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => TourTicketDetail, (ticket) => ticket.tour)
  tickets: TourTicketDetail[];
}
