"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/schema/user.schema");
const mongoose_2 = require("mongoose");
const access_token_service_1 = require("./token/access-token.service");
const refresh_token_service_1 = require("./token/refresh-token.service");
let AuthService = class AuthService {
    constructor(accessTokenService, refreshTokenService, userModel) {
        this.accessTokenService = accessTokenService;
        this.refreshTokenService = refreshTokenService;
        this.userModel = userModel;
    }
    async generateToken(user) {
        const accessToken = await this.accessTokenService.generate({
            id: user._id.toString(),
            username: user.username,
            role: user.role,
        });
        const refreshToken = await this.refreshTokenService.generate({
            token: accessToken,
            id: user._id.toString(),
        });
        return { accessToken, refreshToken };
    }
    async login(loginDto) {
        const { username, password } = loginDto;
        const user = await this.userModel.findOne({ username }, { password: true, username: true, refreshToken: true, role: true });
        if (!user || !user.password || !user.refreshToken) {
            throw new common_1.UnauthorizedException('Invalid user credentials');
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.UnauthorizedException('Invalid user credentials');
        }
        const { accessToken, refreshToken } = await this.generateToken(user);
        user.refreshToken = refreshToken;
        await user.save();
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [access_token_service_1.AccessTokenService,
        refresh_token_service_1.RefreshTokenService,
        mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map