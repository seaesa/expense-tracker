import { DollarSign, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/core/shadcn/card';

import { Input } from '@/components/core/shadcn/input';
import Chart from './chart';
import SwitchTheme from '../switch-theme';
import { useEffect, useState } from 'react';
import { getData } from '@/services/axios';
// import { formatCurrency } from '@/shared/formatCurrency';
import GoalExpense from '../goalExpense';
import { format } from 'date-fns';
import { convertObjectToArray, mergeObject, ObjectProps } from '@/logic/mergeLogic';

export function Component() {
  const [chart, setChart] = useState<ObjectProps[]>([]);
  const [totalThisMonth, setTotalThisMonth] = useState<{
    currentMonth?: number;
    previousMonth?: number;
  }>({});
  useEffect(() => {
    (async () => {
      const expenses = await getData('/expenses');
      const limit = await getData('/limit-expenses');
      const formatExpense = expenses.reduce((prev, curr) => {
        const formatMonth = format(curr.date, 'MMMM');
        prev[formatMonth] = {
          month: formatMonth,
          buyed: curr.amount + (prev[formatMonth]?.buyed || 0),
        };
        return prev;
      }, {} as any);
      const formatLimit = limit.reduce((prev, curr) => {
        const formatMonth = format(curr.date, 'MMMM');
        prev[formatMonth as any] = {
          month: formatMonth,
          limit: curr.amount,
        };
        return prev;
      }, {} as any);
      const data = convertObjectToArray(mergeObject(formatExpense, formatLimit)).sort((a, b) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        return months.indexOf(a.month) - months.indexOf(b.month);
      });
      const previousMonth = new Date(new Date().getTime());
      previousMonth.setDate(0);
      console.log(formatExpense)
      setTotalThisMonth((prev) => ({
        ...prev,
        currentMonth: formatExpense[format(new Date(), 'MMMM')].buyed || 0,
        // previousMonth: formatExpense[format(previousMonth, 'MMMM')].buyed || 0,
      }));
      setChart(data);
    })();
  }, []);
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='z-10 sticky top-0 flex h-16 items-center border-b bg-background px-4 md:px-6 justify-between'>
        <form className='flex-1 sm:flex-initial'>
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search'
              className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
            />
          </div>
        </form>
        <div className='flex w-full items-center justify-end gap-4 md:ml-auto md:gap-4 lg:gap-6'>
          <GoalExpense />
          <SwitchTheme />
        </div>
      </header>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          <Card x-chunk='dashboard-01-chunk-0'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
              <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{totalThisMonth.currentMonth}</div>
              <p className='text-xs text-muted-foreground'>
                {/* {Math.floor(((totalThisMonth.currentMonth - totalThisMonth.previousMonth) / totalThisMonth.previousMonth) * 100)}% from last month */}
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Chart chartData={chart} />
        </div>
      </main>
    </div>
  );
}
