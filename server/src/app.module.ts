import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './app/login/login.module';
import { SignupModule } from './app/signup/signup.module';
import { VerifyMiddleware } from './middlewares/verify/verify.middleware';
import { ConfigModule } from '@nestjs/config';

const envConfix = () => {
  return ConfigModule.forRoot({
    envFilePath: ['.env.local', '.env.development.local', '.env.development'],
    isGlobal: false
  })
}
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [LoginModule, SignupModule, envConfix()],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerifyMiddleware).forRoutes('login')
  }
}
