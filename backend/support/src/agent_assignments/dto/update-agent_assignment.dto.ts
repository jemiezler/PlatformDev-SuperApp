import { PartialType } from '@nestjs/swagger';
import { CreateAgentAssignmentDto } from './create-agent_assignment.dto';

export class UpdateAgentAssignmentDto extends PartialType(CreateAgentAssignmentDto) {}
