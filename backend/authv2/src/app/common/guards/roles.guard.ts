import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/app/decorators/roles.decorator';
import { UserRole } from 'src/app/types/user';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true; // Allow access if no roles are required
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if user or user.role is undefined
    if (!user || !user.role) {
      throw new ForbiddenException('Access denied: no roles assigned.'); // Deny access if user or role is not present
    }

    // Check if the user's single role matches any of the required roles
    const hasRole = requiredRoles.includes(user.role);

    if (!hasRole) {
      throw new ForbiddenException('Access denied: insufficient permissions.'); // Deny access if user does not have the required role
    }

    return true; // Allow access if user has the required role
  }
}
