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
import { PlusIcon } from '@radix-ui/react-icons'
import { useState } from "react"
import DatePicker from '../date'
import Category from '../category'

import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../core/shadcn/form'

const formSchema = z.object({
  amount: z.number(),
  description: z.string(),
  date: z.date(),
  category: z.string()
})
const AddTask: React.FC = () => {
  const [addTask, setAddTask] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      description: '',
      date: new Date(),
      category: ''
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => setAddTask(!addTask)}
            variant="outline" size="sm" className="mx-4">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" aria-description='undefined'>
          <DialogHeader>
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
              <Button type="submit" className='ml-auto'>Save</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default AddTask
