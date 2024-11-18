import { Goal } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Input } from '../ui/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { ReloadIcon } from '@radix-ui/react-icons';
import DatePicker from '../date';
import { postData } from '@/services/axios';
const formSchema = z.object({
  amount: z.string(),
  date: z.date(),
});
const GoalExpense = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
      date: new Date(),
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setOpen(false);
    await postData('/limit-expense', values);
    setLoading(false);
    setOpen(true);
  };
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='ghost' size='icon' className='hover:rounded-full'>
                    <Goal />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Set Goals Your Expense</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </PopoverTrigger>
        <PopoverContent className='max-w-80' align='end'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
              <FormField
                control={form.control}
                name='amount'
                render={({ field }) => (
                  <>
                    <FormItem className='grid grid-cols-4 items-center gap-4'>
                      <FormLabel htmlFor='amount' className='text-right'>
                        Amount
                      </FormLabel>
                      <FormControl>
                        <Input id='amount' className='col-span-3' {...field} />
                      </FormControl>
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name='date'
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
              <Button
                type='submit'
                className='ml-auto'
                size={loading ? 'icon' : 'default'}
                disabled={loading}
              >
                <div className=''>
                  {loading ? <ReloadIcon className='h-4 w-4 animate-spin' /> : 'Save'}
                </div>
              </Button>
            </form>
          </Form>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default GoalExpense;
