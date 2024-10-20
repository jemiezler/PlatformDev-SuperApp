import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Conversation } from './entities/conversation.entity';
import { ConversationDocument } from './schemas/conversations.schema';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectModel(Conversation.name)
    private readonly conversationModel: Model<ConversationDocument>,
  ) {}

  async create(
    createConversationDto: CreateConversationDto,
  ): Promise<Conversation> {
    const newConversation = new this.conversationModel(createConversationDto);
    return await newConversation.save();
  }

  async findAll(): Promise<Conversation[]> {
    return await this.conversationModel.find().lean();
  }

  async findOne(id: string): Promise<Conversation> {
    const conversation = await this.conversationModel.findById(id).lean();
    if (!conversation) {
      throw new NotFoundException(`Conversation with ID ${id} not found`);
    }
    return conversation;
  }

  async update(
    id: string,
    updateConversationDto: UpdateConversationDto,
  ): Promise<Conversation> {
    const updatedConversation = await this.conversationModel
      .findByIdAndUpdate(id, updateConversationDto, { new: true })
      .lean();

    if (!updatedConversation) {
      throw new NotFoundException(`Conversation with ID ${id} not found`);
    }
    return updatedConversation;
  }

  async remove(id: string): Promise<void> {
    const result = await this.conversationModel.findByIdAndDelete(id).lean();
    if (!result) {
      throw new NotFoundException(`Conversation with ID ${id} not found`);
    }
  }
}
