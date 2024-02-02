import { PhoneEntity } from 'src/phone/entities/phone.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'contact' })
export class ContactEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @OneToMany(() => PhoneEntity, (phone) => phone.contact)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  phone_number: PhoneEntity[];
}
