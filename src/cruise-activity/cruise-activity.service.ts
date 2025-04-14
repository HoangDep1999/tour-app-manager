import { Injectable } from '@nestjs/common';
import { CreateCruiseActivityDto } from './dto/create-cruise-activity.dto';
import { UpdateCruiseActivityDto } from './dto/update-cruise-activity.dto';

@Injectable()
export class CruiseActivityService {
  create(createCruiseActivityDto: CreateCruiseActivityDto) {
    return 'This action adds a new cruiseActivity';
  }

  findAll() {
    return `This action returns all cruiseActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cruiseActivity`;
  }

  update(id: number, updateCruiseActivityDto: UpdateCruiseActivityDto) {
    return `This action updates a #${id} cruiseActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} cruiseActivity`;
  }
}
