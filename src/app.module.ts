import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/auth.guard';
import { CruiseActivityModule } from './cruise-activity/cruise-activity.module';
import { DatabaseModule } from './database/database.module';
import { LocationModule } from './location/location.module';
import { LocationTourModule } from './location_tour/location_tour.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TicketTransactionModule } from './ticket-transaction/ticket-transaction.module';
import { TourTicketDetailModule } from './tour-ticket-detail/tour-ticket-detail.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';
import { RolesGuard } from './auth/guard/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({ global: true }),
    DatabaseModule,
    ScheduleModule,
    CruiseActivityModule,
    TourTicketDetailModule,
    TourModule,
    UserModule,
    TicketTransactionModule,
    LocationModule,
    LocationTourModule,
    AuthModule,
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
