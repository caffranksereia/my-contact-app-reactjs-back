import { ContactEntity } from 'src/contact/entities/contact.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'phone' })
export class PhoneEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', nullable: false })
  user_id: number;

  @Column({ name: 'phone_number', nullable: false })
  phone_number: string;

  @ManyToOne(() => ContactEntity, (contact) => contact.phone_number, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  contact: ContactEntity;
}
