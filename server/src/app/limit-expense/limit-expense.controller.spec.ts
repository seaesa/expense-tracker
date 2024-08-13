import { Test, TestingModule } from '@nestjs/testing';
import { LimitExpenseController } from './limit-expense.controller';
import { LimitExpenseService } from './limit-expense.service';

describe('LimitExpenseController', () => {
  let controller: LimitExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LimitExpenseController],
      providers: [LimitExpenseService],
    }).compile();

    controller = module.get<LimitExpenseController>(LimitExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
