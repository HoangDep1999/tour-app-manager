import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourTicketDetail } from './entities/tour-ticket-detail.entity';
import { TourTicketDetailController } from './tour-ticket-detail.controller';
import { TourTicketDetailService } from './tour-ticket-detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([TourTicketDetail])],
  controllers: [TourTicketDetailController],
  providers: [TourTicketDetailService],
})
export class TourTicketDetailModule {}
