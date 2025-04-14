import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CruiseActivityService } from './cruise-activity.service';
import { CreateCruiseActivityDto } from './dto/create-cruise-activity.dto';
import { UpdateCruiseActivityDto } from './dto/update-cruise-activity.dto';

@Controller('cruise-activity')
export class CruiseActivityController {
  constructor(private readonly cruiseActivityService: CruiseActivityService) {}

  @Post()
  create(@Body() createCruiseActivityDto: CreateCruiseActivityDto) {
    return this.cruiseActivityService.create(createCruiseActivityDto);
  }

  @Get()
  findAll() {
    return this.cruiseActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cruiseActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCruiseActivityDto: UpdateCruiseActivityDto) {
    return this.cruiseActivityService.update(+id, updateCruiseActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cruiseActivityService.remove(+id);
  }
}
