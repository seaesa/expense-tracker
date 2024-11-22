import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

import Chart from './chart';

import { useEffect, useState } from 'react';
import { getData } from '@/services/axios';
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
      const data = convertObjectToArray(mergeObject(formatExpense, formatLimit)).sort(
        (a: any, b: any) => {
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
          return months.indexOf(a?.month) - months.indexOf(b?.month);
        }
      );
      const previousMonth = new Date(new Date().getTime());
      previousMonth.setDate(0);
      setTotalThisMonth((prev) => ({
        ...prev,
        currentMonth: formatExpense[format(new Date(), 'MMMM')]?.buyed || 0,
        // previousMonth: formatExpense[format(previousMonth, 'MMMM')].buyed || 0,
      }));
      setChart(data as any);
    })();
  }, []);
  return (
    <div className='flex min-h-screen w-full flex-col'>
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
