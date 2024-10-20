import { Module } from '@nestjs/common';
import { EscalationsService } from './escalations.service';
import { EscalationsController } from './escalations.controller';

@Module({
  controllers: [EscalationsController],
  providers: [EscalationsService],
})
export class EscalationsModule {}
