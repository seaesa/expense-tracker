export class CreateExpenseDto {
  readonly amount: number;
  readonly description: string;
  readonly date: Date;
  readonly category: string;
}
