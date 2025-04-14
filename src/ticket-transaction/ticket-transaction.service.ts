import { Injectable } from '@nestjs/common';
import { CreateTicketTransactionDto } from './dto/create-ticket-transaction.dto';
import { UpdateTicketTransactionDto } from './dto/update-ticket-transaction.dto';

@Injectable()
export class TicketTransactionService {
  create(createTicketTransactionDto: CreateTicketTransactionDto) {
    return 'This action adds a new ticketTransaction';
  }

  findAll() {
    return `This action returns all ticketTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketTransaction`;
  }

  update(id: number, updateTicketTransactionDto: UpdateTicketTransactionDto) {
    return `This action updates a #${id} ticketTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketTransaction`;
  }
}
