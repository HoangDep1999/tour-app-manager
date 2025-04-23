import { AbstractEntity } from 'src/database/abstract.entity';
import { LocationTour } from 'src/location_tour/entities/location_tour.entity';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail.entity';
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

  @OneToMany(() => LocationTour, (locationTour) => locationTour.locations)
  locationTours: LocationTour[];
}
