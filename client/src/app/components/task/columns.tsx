'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/app/components/ui/checkbox';

import { Task } from './schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { UpdateTask } from './update-task';
import { useState } from 'react';
import { format } from 'date-fns';

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Amount' />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>{formatted}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Description' />,
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('description')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Date' />,
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{format(row.getValue('date'), 'PPP')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'category',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Category' />,
    cell: ({ row }) => {
      return (
        <div className='flex items-center'>
          <span>{(row.getValue('category') as any)?.name}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const [open, setOpen] = useState<boolean>(false);
      return (
        <>
          <DataTableRowActions row={row} setOpen={setOpen} />
          <UpdateTask row={row} open={open} setOpen={setOpen} />
        </>
      );
    },
  },
];
