import { LocationEntity } from 'src/location/entities/location.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('location_tour')
export class LocationTour {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LocationEntity, (location) => location.locationTours, { onDelete: 'CASCADE' })
  locations: LocationEntity;

  @ManyToOne(() => Tour, (tour) => tour.locationTours, { onDelete: 'CASCADE' })
  tours: Tour;
}
