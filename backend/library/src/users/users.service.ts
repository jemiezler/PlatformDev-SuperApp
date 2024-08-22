import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  // อย่าลืมดัก Error
  async create(registerDTO: RegisterDTO) {
    const userDoc = new this.userModel(registerDTO);
    const user = await userDoc.save();
    return user.toObject();
  }

  // เตรียมไว้สำหรับหา user
  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).lean();
  }

  async findAll() {
    const user = await this.userModel.find().lean();
    return user;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).lean();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const exists = await this.userModel.findById({ _id: id });
    const options = { new: true };
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, options)
      .lean();
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id).lean();
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updatePassword(userId: string, newPassword: string): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(userId, { password: newPassword }, { new: true })
      .exec();
  }
}
