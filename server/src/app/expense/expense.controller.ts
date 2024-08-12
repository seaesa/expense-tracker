import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { CategoryService } from '../category/category.service';
import { CategorySchema, Category } from 'src/schemas/category.schema';

@Controller('api/v1')
export class ExpenseController {
  constructor(
    private readonly expenseService: ExpenseService,
    private readonly categoryService: CategoryService,
  ) { }

  @Post('expenses')
  async create(@Body() body: CreateExpenseDto) {
    const { category } = body;
    const data = await this.categoryService.findOne(category)
    // const { date } = createExpenseDto;
    // if (typeof date === 'string')
    //   throw new HttpException({
    //     status: HttpStatus.BAD_REQUEST,
    //     error: 'Date feild must be Date format'
    //   }, HttpStatus.BAD_REQUEST)
    return this.expenseService.create({ ...body, category: data._id as string });
  }

  @Get('expenses')
  findAll() {
    return this.expenseService.findAll();
  }

  @Get('expense/:id')
  findOne(@Param('id') id: string) {
    return this.expenseService.findOne(+id);
  }

  @Patch('expense/:id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    console.log(id)
    console.log(updateExpenseDto)
    return this.expenseService.update(id, updateExpenseDto);
  }

  @Delete('expense/:id')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(id);
  }
}
