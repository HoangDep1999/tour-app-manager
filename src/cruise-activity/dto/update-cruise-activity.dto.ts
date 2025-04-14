import { PartialType } from '@nestjs/swagger';
import { CreateCruiseActivityDto } from './create-cruise-activity.dto';

export class UpdateCruiseActivityDto extends PartialType(CreateCruiseActivityDto) {}
