import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense, ExpenseSchema } from 'src/schemas/expense.schema';
import { CategoryModule } from '../category/category.module';
@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService],
  imports: [
    CategoryModule,
    MongooseModule.forFeature([
      { name: Expense.name, schema: ExpenseSchema },
    ]
    )
  ]
})
export class ExpenseModule { }
