import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgentAssignmentsService } from './agent_assignments.service';
import { CreateAgentAssignmentDto } from './dto/create-agent_assignment.dto';
import { UpdateAgentAssignmentDto } from './dto/update-agent_assignment.dto';

@Controller('agent-assignments')
export class AgentAssignmentsController {
  constructor(private readonly agentAssignmentsService: AgentAssignmentsService) {}

  @Post()
  create(@Body() createAgentAssignmentDto: CreateAgentAssignmentDto) {
    return this.agentAssignmentsService.create(createAgentAssignmentDto);
  }

  @Get()
  findAll() {
    return this.agentAssignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentAssignmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentAssignmentDto: UpdateAgentAssignmentDto) {
    return this.agentAssignmentsService.update(+id, updateAgentAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentAssignmentsService.remove(+id);
  }
}
