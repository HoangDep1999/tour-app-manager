import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationTour } from './entities/location_tour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationTour])],
})
export class LocationTourModule {}
