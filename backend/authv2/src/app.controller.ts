import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './app/decorators/roles.decorator';
import { UserRole } from './app/types/user';
import { Public } from './app/decorators/public.decorator';
import { RolesGuard } from './app/common/guards/roles.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Protected')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  getHelloProtected(): string {
    return this.appService.getHello();
  }
}
