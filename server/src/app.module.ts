import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './app/login/login.module';
import { SignupModule } from './app/signup/signup.module';
import { VerifyMiddleware } from './middlewares/verify/verify.middleware';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const envConfix = () => {
  return ConfigModule.forRoot({
    envFilePath: ['.env.local', '.env.development.local', '.env.development'],
    isGlobal: true
  })
}
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [LoginModule, SignupModule, envConfix(), MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(VerifyMiddleware).forRoutes('login')
  // }
}
