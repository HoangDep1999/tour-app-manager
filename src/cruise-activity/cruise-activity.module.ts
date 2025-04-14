import { Module } from '@nestjs/common';
import { CruiseActivityService } from './cruise-activity.service';
import { CruiseActivityController } from './cruise-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CruiseActivity } from './entities/cruise-activity.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CruiseActivity])],
  controllers: [CruiseActivityController],
  providers: [CruiseActivityService],
})
export class CruiseActivityModule {}
