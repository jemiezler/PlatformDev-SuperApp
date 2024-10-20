import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscalationsService } from './escalations.service';
import { CreateEscalationDto } from './dto/create-escalation.dto';
import { UpdateEscalationDto } from './dto/update-escalation.dto';

@Controller('escalations')
export class EscalationsController {
  constructor(private readonly escalationsService: EscalationsService) {}

  @Post()
  create(@Body() createEscalationDto: CreateEscalationDto) {
    return this.escalationsService.create(createEscalationDto);
  }

  @Get()
  findAll() {
    return this.escalationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escalationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscalationDto: UpdateEscalationDto) {
    return this.escalationsService.update(+id, updateEscalationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escalationsService.remove(+id);
  }
}
