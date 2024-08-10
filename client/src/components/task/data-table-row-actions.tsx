"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/core/shadcn/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/core/shadcn/dropdown-menu"
import { apiv1 } from '@/services/axios'
import { useExpenseStore } from '@/stores/expense'
import { Task } from './schema'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function DataTableRowActions<TData extends Task>({
  row,
  setOpen
}: DataTableRowActionsProps<TData>) {
  const DeleteExpense = useExpenseStore((state) => state.deleteTask)
  const handleDeleteExpense = async () => {
    const idExpense = row.original?._id
    await apiv1.delete(`/expense/${idExpense}`)
    DeleteExpense(idExpense)
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]" >
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteExpense}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}