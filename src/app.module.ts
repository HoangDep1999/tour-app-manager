import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './schedule/schedule.module';
import { CruiseActivityModule } from './cruise-activity/cruise-activity.module';
import { TourTicketDetailModule } from './tour-ticket-detail/tour-ticket-detail.module';
import { UserModule } from './user/user.module';
import { TourModule } from './tour/tour.module';
import { TicketTransactionModule } from './ticket-transaction/ticket-transaction.module';
import { LocationModule } from './location/location.module';
import { LocationTourModule } from './location_tour/location_tour.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ScheduleModule,
    CruiseActivityModule,
    TourTicketDetailModule,
    TourModule,
    UserModule,
    TicketTransactionModule,
    LocationModule,
    LocationTourModule,
  ],
})
export class AppModule {}
