import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Expense {

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  date: Date

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  // category: Category
  @Prop({ required: true })
  category: string
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);