import { Injectable } from '@nestjs/common';
import { CreateEscalationDto } from './dto/create-escalation.dto';
import { UpdateEscalationDto } from './dto/update-escalation.dto';

@Injectable()
export class EscalationsService {
  create(createEscalationDto: CreateEscalationDto) {
    return 'This action adds a new escalation';
  }

  findAll() {
    return `This action returns all escalations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escalation`;
  }

  update(id: number, updateEscalationDto: UpdateEscalationDto) {
    return `This action updates a #${id} escalation`;
  }

  remove(id: number) {
    return `This action removes a #${id} escalation`;
  }
}
