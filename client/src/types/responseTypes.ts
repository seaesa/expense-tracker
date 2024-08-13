interface Category {
  _id: string,
  name: string
}
export interface AxiosResponseData {
  _id: string,
  amount: number,
  category: Category,
  description: string,
  date: Date,
  [name: string]: unknown,
}