import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})
export class LoginModule { }
