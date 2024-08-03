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
import { forwardRef, useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
const Category = forwardRef<HTMLDivElement, ControllerRenderProps>((field, ref) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [field.value])
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
                ? frameworks.find((framework) => framework.value === field.value)?.label
                : "add category"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-1 w-full" align='start'>
            <Command>
              <div className='flex items-center'>
                <CommandInput placeholder='add item' />
                <Button variant="ghost" size="icon">
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <CommandList>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      {...field}
                      ref={ref}
                      key={framework.value}
                      value={framework.value}
                      onSelect={field.onChange}
                    >
                      {framework.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          field.value === framework.value ? "opacity-100" : "opacity-0"
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