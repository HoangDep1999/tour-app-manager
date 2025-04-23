import { AbstractEntity } from 'src/database/abstract.entity';
import { TourTicketDetail } from 'src/tour-ticket-detail/entities/tour-ticket-detail.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('ticket_transaction')
export class TicketTransaction extends AbstractEntity<TicketTransaction> {
  @Column()
  quantity: number;

  @Column()
  soldAt: Date;

  @ManyToOne(() => TourTicketDetail, (ticket) => ticket.sales, { onDelete: 'CASCADE' })
  ticket: TourTicketDetail;
}
