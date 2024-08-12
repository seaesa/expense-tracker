import { Button } from "@/components/core/shadcn/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/core/shadcn/dialog"
import { Input } from "@/components/core/shadcn/input"
import { PlusIcon, ReloadIcon } from '@radix-ui/react-icons'
import { useState } from "react"
import DatePicker from '../date'
import Category from '../category'

import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../core/shadcn/form'
import { postData } from '@/services/axios'
import { useExpenseStore } from '@/stores/expense'

const formSchema = z.object({
  amount: z.string(),
  description: z.string(),
  date: z.date(),
  category: z.string()
})
const AddTask: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  const handleAddTask = useExpenseStore((state) => state.addTask)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
      description: '',
      date: new Date(),
      category: ''
    },
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const data: any = await postData('/expenses', values)
    setLoading(false)
    setOpen(false)
    handleAddTask(data)
  }
  return (
    <div className="">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            variant="outline" size="sm" className="mx-4">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader >
            <DialogTitle>Add new</DialogTitle>
            {/* fix warning: Missing `Description` or `aria-describedby={undefined}` for {DialogContent}.*/}
            <DialogDescription hidden>add new item</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <>
                    <FormItem className='grid grid-cols-4 items-center gap-4'>
                      <FormLabel htmlFor='amount' className='text-right'>Amount</FormLabel>
                      <FormControl>
                        <Input id="amount" className="col-span-3" {...field} />
                      </FormControl>
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <>
                    <FormItem className='grid grid-cols-4 items-center gap-4'>
                      <FormLabel htmlFor='description' className='text-right'>Description</FormLabel>
                      <FormControl>
                        <Input id="description" className="col-span-3" {...field} />
                      </FormControl>
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <>
                    <FormItem className='grid grid-cols-4 items-center gap-4'>
                      <FormLabel className='text-right'>Date</FormLabel>
                      <FormControl>
                        <DatePicker {...field} />
                      </FormControl>
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <>
                    <FormItem className='grid grid-cols-4 items-center gap-4'>
                      <FormLabel htmlFor='category' className='text-right'>Category</FormLabel>
                      <FormControl>
                        <Category {...field} />
                      </FormControl>
                    </FormItem>
                  </>
                )}
              />
              <Button type="submit" className='ml-auto' size={loading ? 'icon' : 'default'} disabled={loading}>
                <div className=''>
                  {loading ? (
                    <ReloadIcon className="h-4 w-4 animate-spin" />
                  ) : 'Save'}
                </div>
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div >
  )
}
export default AddTask
