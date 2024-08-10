import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('api/v1')
export class ExpenseController {
  constructor(
    private readonly expenseService: ExpenseService,
  ) { }

  @Post('expenses')
  create(@Body() createExpenseDto: CreateExpenseDto) {
    // const { date } = createExpenseDto;
    // if (typeof date === 'string')
    //   throw new HttpException({
    //     status: HttpStatus.BAD_REQUEST,
    //     error: 'Date feild must be Date format'
    //   }, HttpStatus.BAD_REQUEST)
    return this.expenseService.create(createExpenseDto);
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
