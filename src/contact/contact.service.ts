import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly itemRepository: Repository<ContactEntity>,
  ) {}
  async create(createContactDto: CreateContactDto): Promise<ContactEntity> {
    const response = await this.itemRepository.save({ ...createContactDto });
    console.log(response);

    return response;
  }

  async findAll(): Promise<ContactEntity[]> {
    return await this.itemRepository.find();
  }

  findOne(id: number): Promise<ContactEntity> {
    return this.itemRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        phone_number: true,
      },
    });
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const data = await this.itemRepository.find({
      where: {
        id,
      },
      relations: {
        phone_number: true,
      },
    });
    if (!data || data == null) {
      throw new NotFoundException(`User not found for user Id: ${id}`);
    }
    return await this.itemRepository.save(updateContactDto);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
