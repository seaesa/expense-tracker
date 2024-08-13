import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LimitExpense } from 'src/schemas/limitExpense.schema';
import { LimitExpenseDto } from './dto/create-limitExpense.dto';
import { format } from 'date-fns';

@Injectable()
export class LimitExpenseService {
  constructor(
    @InjectModel(LimitExpense.name) private limitExpenseModel: Model<LimitExpense>
  ) { }

  async create(body: LimitExpenseDto) {
    return this.limitExpenseModel.create({ ...body })
  }
  async findAll() {
    const data = await this.limitExpenseModel.find({})
    return data
  }
}
