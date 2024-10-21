import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    private readonly messageBuilder;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("src/app/common/utils/response.util").ResponseDto<UserEntity>>;
}
