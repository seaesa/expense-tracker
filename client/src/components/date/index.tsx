import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/shadcn/utils';
import { Button } from '@/components/core/shadcn/button';
import { Calendar } from '@/components/core/shadcn/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/core/shadcn/popover';
import { ControllerRenderProps } from 'react-hook-form';
import { forwardRef } from 'react';

const Date = forwardRef<HTMLDivElement, ControllerRenderProps>((field, ref) => {
	return (
		<div className='col-span-3'>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={'outline'}
						className={cn(
							'w-full justify-start text-left font-normal',
							!field.value && 'text-muted-foreground'
						)}
					>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-full p-0' align='start'>
					<Calendar mode='single' selected={field.value} onSelect={field.onChange} initialFocus />
				</PopoverContent>
			</Popover>
		</div>
	);
});
export default Date;
