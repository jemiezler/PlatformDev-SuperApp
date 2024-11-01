import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<import("src/app/common/utils/response.util").ResponseDto<import("./interfaces/login.interface").Tokens>>;
}
