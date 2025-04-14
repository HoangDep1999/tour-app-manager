import { AbstractEntity } from 'src/database/abstract.entity';
import { LocationTour } from 'src/location_tour/entities/location_tour.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('location')
export class LocationEntity extends AbstractEntity<LocationEntity> {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => LocationTour, (locationTour) => locationTour.locations)
  locationTours: LocationTour[];
}
