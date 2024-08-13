import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from './category.schema';
import mongoose from 'mongoose';
@Schema({
  timestamps: true
})
export class Expense {

  @Prop({ required: true, type: Number })
  amount: number;

  @Prop({ required: true })
  description: string

  @Prop({ required: true, type: mongoose.Schema.Types.Date })
  date: Date

  @Prop({ type: Boolean, required: false, default: false })
  deleted: boolean

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);