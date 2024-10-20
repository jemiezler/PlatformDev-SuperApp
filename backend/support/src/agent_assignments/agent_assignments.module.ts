import { Module } from '@nestjs/common';
import { AgentAssignmentsService } from './agent_assignments.service';
import { AgentAssignmentsController } from './agent_assignments.controller';

@Module({
  controllers: [AgentAssignmentsController],
  providers: [AgentAssignmentsService],
})
export class AgentAssignmentsModule {}
