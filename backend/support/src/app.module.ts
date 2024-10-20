import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentsModule } from './departments/departments.module';
import { TicketsModule } from './tickets/tickets.module';
import configuration from './app/config/configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { ConversationsModule } from './conversations/conversations.module';
import { AgentAssignmentsModule } from './agent_assignments/agent_assignments.module';
import { TicketTagsModule } from './ticket_tags/ticket_tags.module';
import { EscalationsModule } from './escalations/escalations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    CacheModule.register({ isGlobal: true }),
    DepartmentsModule,
    TicketsModule,
    ConversationsModule,
    AgentAssignmentsModule,
    TicketTagsModule,
    EscalationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
