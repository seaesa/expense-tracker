import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';

@Schema()
export class LimitExpense {
  @Prop({ type: mongoose.Schema.ObjectId })
  id: ObjectId

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, type: mongoose.Schema.Types.Date })
  date: Date;
}

export const LimitExpenseSchema = SchemaFactory.createForClass(LimitExpense);