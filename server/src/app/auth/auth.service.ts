import { Injectable, UnauthorizedException } from '@nestjs/common'; import { SignupDto } from './dto/sign-up.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  async signIn(signInData: loginDto): Promise<any> {
    const { email, password } = signInData
    const user = await this.userModel.findOne({ email })
    if (user) {
      if (!bcrypt.compareSync(password, user.password))
        throw new UnauthorizedException();
      return user
    } else throw new UnauthorizedException();
  }
  async signUp(signupData: Omit<SignupDto, 'confirmPassword'>): Promise<any> {
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(signupData.password, salt)
    return await this.userModel.create({ ...signupData, password: passwordHashed })
  }
}
