import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { loginDto } from './dto/login.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {

  }
  @Post('login')
  async signIn(@Body() signInDto: loginDto) {
    const user = await this.authService.signIn(signInDto)
    const payload = { id: user.id };
    return {
      username: user.username,
      email: user.email,
      id: user.id,
      access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
    }

  }
  @Post('register')
  async signUp(@Body() body: SignupDto) {
    const { confirmPassword, email, password, username } = body
    if (password !== confirmPassword) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    const data = await this.authService.signUp({ email, password, username })
    const payload = { id: data.id };
    return {
      username: data.username,
      email: data.email,
      id: data.id,
      access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
    }
  }
}
