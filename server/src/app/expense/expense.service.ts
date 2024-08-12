import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ConfigService } from '@nestjs/config';
import { Expense } from 'src/schemas/expense.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExpenseService {
  constructor(
    private readonly config: ConfigService,
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
  ) {

  }
  async create(createExpenseDto: CreateExpenseDto) {
    const data = await this.expenseModel.create(createExpenseDto)
    return data
  }

  findAll() {
    const data = this.expenseModel.find({}).populate('category')
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    await this.expenseModel.updateOne({ _id: id }, updateExpenseDto)
    return {
      code: HttpStatus.OK,
      status: 'SUSSCESS',
      message: 'update successfully'
    }
  }

  async remove(id: string) {
    await this.expenseModel.deleteOne({ _id: id })
    return {
      code: HttpStatus.OK,
      status: 'SUSSCESS',
      message: 'delete successfully'
    }
  }
}
