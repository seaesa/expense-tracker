import { Test, TestingModule } from '@nestjs/testing';
import { LimitExpenseService } from './limit-expense.service';

describe('LimitExpenseService', () => {
  let service: LimitExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LimitExpenseService],
    }).compile();

    service = module.get<LimitExpenseService>(LimitExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
