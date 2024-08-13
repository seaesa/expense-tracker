import { Module } from '@nestjs/common';
import { LimitExpenseService } from './limit-expense.service';
import { LimitExpenseController } from './limit-expense.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LimitExpense, LimitExpenseSchema } from 'src/schemas/limitExpense.schema';

@Module({
  controllers: [LimitExpenseController],
  providers: [LimitExpenseService],
  imports: [
    MongooseModule.forFeature([
      { name: LimitExpense.name, schema: LimitExpenseSchema },
    ])
  ]
})
export class LimitExpenseModule { }
