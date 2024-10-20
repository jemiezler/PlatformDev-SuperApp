import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  // Create a new conversation
  @Post()
  create(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationsService.create(createConversationDto);
  }

  // Retrieve all conversations
  @Get()
  findAll() {
    return this.conversationsService.findAll();
  }

  // Retrieve a single conversation by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationsService.findOne(id); // Using string for MongoDB ObjectId
  }

  // Update a conversation by ID
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConversationDto: UpdateConversationDto,
  ) {
    return this.conversationsService.update(id, updateConversationDto); // Using string for ObjectId
  }

  // Remove a conversation by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conversationsService.remove(id); // Using string for ObjectId
  }
}
