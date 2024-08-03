import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private config: ConfigService,
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  @Post()
  create() {
    console.log(User.name)
    this.userModel.create({
      username: 'hai',
      email: 'hairipi100@gmail.com',
      password: 'okla'
    })
    // return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    console.log(this.config.get<string>('HOST'))
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.loginService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
