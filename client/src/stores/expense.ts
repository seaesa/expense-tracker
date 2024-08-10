import { Task, taskSchema } from '@/components/task/schema'
import { z } from 'zod'
import { create } from 'zustand'

interface ExpenseState {
  tasks: Task[],
  render: boolean,
  dispatch: (value: Task[]) => void,
  addTask: (value: Task) => void,
  deleteTask: (value: string) => void,
  onReRender: () => void,
}

export const useExpenseStore = create<ExpenseState>((set) => ({
  tasks: z.array(taskSchema).parse([]),
  render: false,
  dispatch: (value) => set(() => ({ tasks: value })),
  addTask: (value) => set((state) => ({ tasks: [...state.tasks, value] })),
  deleteTask: (value) => set((state) => {
    return {
      tasks: state.tasks.filter(task => String(task._id) !== String(value))
    }
  }),
  onReRender: () => set((state) => ({ render: !state.render }))
}))