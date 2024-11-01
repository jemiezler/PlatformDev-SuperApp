import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    private readonly messageBuilder;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("src/app/common/utils/response.util").ResponseDto<UserEntity>>;
}
