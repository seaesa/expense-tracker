import { z } from "zod"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { UserNav } from "./user-nav"
import { Separator } from "../core/shadcn/separator"
import SwitchTheme from '../switch-theme'
import { useEffect, useState } from 'react'
import { apiv1 } from '@/services/axios'
import { taskSchema } from './schema'
import { useExpenseStore } from '@/stores/expense'
export const metadata: any = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}
const Task = () => {
  const [tasks, handleAddtask, render] = useExpenseStore((state) => [state.tasks, state.dispatch, state.render])
  // const [tasks, setTasks] = useState(z.array(taskSchema).parse([]))
  useEffect(() => {
    (async () => {
      const data: any = await apiv1.get('/expenses')
      handleAddtask(data)
    })()
  }, [render])
  return (
    <>
      <div className="hidden flex-1 flex-col space-y-6 px-8 py-4 md:flex h-full w-full">
        <div className="space-y-2">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Hello Ngoc Hai !</h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of all your data
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="mr-4">
                <SwitchTheme />
              </div>
              <UserNav />
            </div>
          </div>
          <Separator />
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </>
  )
}
export default Task