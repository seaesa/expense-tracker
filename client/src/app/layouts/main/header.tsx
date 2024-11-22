import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';
import { Input } from '@/app/components/ui/input';
import SwitchTheme from '../../components/switch-theme';
import GoalExpense from '../../components/goalExpense';
import { useSidebar } from '@/app/components/ui/sidebar';
import { AlignJustify, Search } from 'lucide-react';
export default function Header() {
  const { isMobile, toggleSidebar } = useSidebar()

  return (
    <>
      <header className='sticky z-[1] top-0 flex h-16 items-center bg-background px-4 md:px-6 justify-between space-x-4'>
        {isMobile && (
          <>
            <div>
              <Button
                onClick={toggleSidebar}
                variant='ghost' size='icon'>
                <AlignJustify />
              </Button>
            </div>
            <Separator orientation='vertical' className='h-4' />
          </>
        )}
        <form className='flex-1 sm:flex-initial'>
          <div className='relative'>
            <Search className='absolute top-2/4 -translate-y-2/4 ml-2 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search'
              className='pl-8'
            />
          </div>
        </form>
        <div className='flex items-center justify-end gap-4 md:ml-auto md:gap-4 lg:gap-6'>
          <GoalExpense />
          <SwitchTheme />
        </div>
      </header>
      <Separator />
    </>
  );
}
