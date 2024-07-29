import { z } from "zod"
import json from './task.json'
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { UserNav } from "./user-nav"
import { taskSchema } from "./schema"
import { Separator } from "../core/shadcn/separator"
import { Switch } from "../core/shadcn/switch"
export const metadata: any = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

const Task = () => {
  const tasks = z.array(taskSchema).parse(json)
  return (
    <>
      {/* <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div> */}
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
                <Switch />
              </div>
              <UserNav />
            </div>
          </div>
          <Separator />
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
export default Task