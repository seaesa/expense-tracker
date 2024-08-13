import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LimitExpenseService } from './limit-expense.service';
import { LimitExpenseDto } from './dto/create-limitExpense.dto';

@Controller('api/v1')
export class LimitExpenseController {
  constructor(private readonly limitExpenseService: LimitExpenseService) { }

  @Post('limit-expense')
  create(@Body() body: LimitExpenseDto) {
    return this.limitExpenseService.create(body)
  }

  @Get('limit-expenses')
  findAll() {
    return this.limitExpenseService.findAll()
  }
}
