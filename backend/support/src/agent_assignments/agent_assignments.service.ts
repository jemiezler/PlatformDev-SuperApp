import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAgentAssignmentDto } from './dto/create-agent_assignment.dto';
import { UpdateAgentAssignmentDto } from './dto/update-agent_assignment.dto';
import {
  Agent_Assignment,
  Agent_AssignmentDocument,
} from './schemas/agent_assignments.schema';

@Injectable()
export class AgentAssignmentsService {
  constructor(
    @InjectModel(Agent_Assignment.name)
    private agentAssignmentModel: Model<Agent_AssignmentDocument>,
  ) {}

  async create(
    createAgentAssignmentDto: CreateAgentAssignmentDto,
  ): Promise<Agent_Assignment> {
    const newAssignment = new this.agentAssignmentModel(
      createAgentAssignmentDto,
    );
    return newAssignment.save();
  }

  async findAll(): Promise<Agent_Assignment[]> {
    return this.agentAssignmentModel.find().lean();
  }

  // Find a specific agent assignment by ID
  async findOne(id: string): Promise<Agent_Assignment> {
    const assignment = await this.agentAssignmentModel.findById(id).lean();
    if (!assignment) {
      throw new NotFoundException(`Agent assignment with ID ${id} not found`);
    }
    return assignment;
  }

  // Update an agent assignment by ID
  async update(
    id: string,
    updateAgentAssignmentDto: UpdateAgentAssignmentDto,
  ): Promise<Agent_Assignment> {
    const updatedAssignment = await this.agentAssignmentModel
      .findByIdAndUpdate(id, updateAgentAssignmentDto, { new: true })
      .lean();
    if (!updatedAssignment) {
      throw new NotFoundException(`Agent assignment with ID ${id} not found`);
    }
    return updatedAssignment;
  }

  // Remove an agent assignment by ID
  async remove(id: string): Promise<Agent_Assignment> {
    const deletedAssignment = await this.agentAssignmentModel
      .findByIdAndDelete(id)
      .lean();
    if (!deletedAssignment) {
      throw new NotFoundException(`Agent assignment with ID ${id} not found`);
    }
    return deletedAssignment;
  }
}
