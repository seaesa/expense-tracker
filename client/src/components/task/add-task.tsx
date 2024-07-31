import { Button } from "@/components/core/shadcn/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/core/shadcn/dialog"
import { Input } from "@/components/core/shadcn/input"
import { Label } from "@/components/core/shadcn/label"
import { Plus } from "lucide-react"
import { useState } from "react"

const AddTask = () => {
  const [addTask, setAddTask] = useState<boolean>(false)

  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => setAddTask(!addTask)}
            variant="outline" size="sm" className="mx-4">
            <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default AddTask
