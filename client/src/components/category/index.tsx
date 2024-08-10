import { CaretSortIcon, CheckIcon, PlusIcon } from "@radix-ui/react-icons"

import { cn } from '@/lib/shadcn/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/shadcn/popover"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../core/shadcn/command"
import { Button } from '../core/shadcn/button';
import { CommandList } from 'cmdk';
import { forwardRef, MutableRefObject, useEffect, useRef, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { apiv1 } from '@/services/axios';
const Category = forwardRef<HTMLDivElement, ControllerRenderProps>((field, ref) => {
  const [categories, setCategories] = useState<Array<any>>([])
  const [open, setOpen] = useState(false)
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>
  const handleAddCategory = async () => {
    const data: any = await apiv1.post('/category', { name: searchRef.current.value })
    setCategories(category => [...category, data])
  }
  useEffect(() => {
    setOpen(false)
  }, [field.value])

  useEffect(() => {
    (async () => {
      const data: any = await apiv1.get('/categories')
      setCategories(data)
    })()
  }, [])
  return (
    <>
      <div className="col-span-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {field.value
                ? categories.find((category) => category.name === field.value)?.name
                : "Category"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-1 w-full" align='start'>
            <Command>
              <div className='flex items-center'>
                <CommandInput ref={searchRef} placeholder='add item' />
                <Button onClick={handleAddCategory} variant="ghost" size="icon">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <CommandList>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      {...field}
                      ref={ref}
                      key={category._id}
                      value={category.name}
                      onSelect={field.onChange}
                    >
                      {category.name}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          field.value === category.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
})
export default Category 