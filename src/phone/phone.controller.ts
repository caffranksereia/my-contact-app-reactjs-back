import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PhoneEntity } from './entities/phone.entity';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post('/:id')
  async create(
    @Body() createPhoneDto: CreatePhoneDto,
    @Param('id') id_user: number,
  ): Promise<PhoneEntity> {
    return await this.phoneService.create(createPhoneDto, id_user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phoneService.update(+id, updatePhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneService.remove(+id);
  }
}
