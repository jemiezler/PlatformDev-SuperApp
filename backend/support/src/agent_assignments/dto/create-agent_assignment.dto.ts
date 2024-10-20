import { IsNotEmpty, IsDateString, IsMongoId } from 'class-validator';

export class CreateAgentAssignmentDto {
  @IsNotEmpty()
  @IsMongoId()
  agent_id: string;

  @IsNotEmpty()
  @IsMongoId()
  department_id: string;

  @IsDateString()
  assigned_at?: Date;
}
