import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerifyMiddleware } from './middlewares/verify/verify.middleware';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './app/expense/expense.module';
import { AuthModule } from './app/auth/auth.module';
import { CategoryModule } from './app/category/category.module';

const envConfix = () => {
  return ConfigModule.forRoot({
    envFilePath: ['.env.local', '.env.development.local', '.env.development'],
    isGlobal: true
  })
}
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [envConfix(), MongooseModule.forRoot(process.env.MONGO_URL), ExpenseModule, AuthModule, CategoryModule],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(VerifyMiddleware).forRoutes('login')
  // }
}
