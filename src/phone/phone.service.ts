import { Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PhoneEntity } from './entities/phone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(PhoneEntity)
    private itemRepository: Repository<PhoneEntity>,
  ) {}
  async create(
    createPhoneDto: CreatePhoneDto,
    user_id: number,
  ): Promise<PhoneEntity> {
    console.log('createPhoneDto', createPhoneDto, user_id);
    return await this.itemRepository.save({ ...createPhoneDto, user_id });
  }

  findOne(id: number) {
    return this.itemRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updatePhoneDto: UpdatePhoneDto) {
    return `This action updates a #${id} phone`;
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
