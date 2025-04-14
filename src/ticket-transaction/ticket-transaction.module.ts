import { Module } from '@nestjs/common';
import { TicketTransactionService } from './ticket-transaction.service';
import { TicketTransactionController } from './ticket-transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketTransaction } from './entities/ticket-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketTransaction])],
  controllers: [TicketTransactionController],
  providers: [TicketTransactionService],
})
export class TicketTransactionModule {}
