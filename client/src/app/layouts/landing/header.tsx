import { Link } from 'react-router-dom';
import { Button } from '@components/ui/button';
import { Separator } from '@components/ui/separator';
import SwitchTheme from '@/app/components/switch-theme';
import logo from '@/assets/images/logo.png';
import { navbarConfig } from '@/config/path';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/app/components/ui/drawer';
import { AlignJustify } from 'lucide-react';
export default function Header() {
  return (
    <>
      <div className='flex screen-header items-center justify-between mx-2 my-1 w-full'>
        <div className='mx-2'>
          <Link to='/' className='flex items-center'>
            <img src={logo} alt='logo.png' className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain' />
            <span className='mx-2 text-base md:text-lg font-extrabold font-playwrite'>NOSION</span>
          </Link>
        </div>
        <div className='hidden md:flex flex-1 mx-5'>
          {navbarConfig.map((nav, index) => (
            <nav
              key={index}
              className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'
            >
              <div className='mx-2'>
                <Link to={nav.href} className='text-muted-foreground transition-colors hover:text-foreground'>
                  {nav.title}
                </Link>
              </div>
            </nav>
          ))}
        </div>
        <div className='hidden md:flex mx-2 items-center'>
          <SwitchTheme />
          <div className='flex items-center'>
            <Button asChild variant='ghost' className='hover:bg-none!'>
              <Link to='login'>Login</Link>
            </Button>
            <Separator orientation='vertical' className='h-6 mr-4' />
            <Button asChild>
              <Link to='/signup'>Get Nosion Free</Link>
            </Button>
          </div>
        </div>

        <div className='flex md:hidden'>
          <Drawer>
            <DrawerTrigger asChild>
              <Button size='icon' variant='ghost'>
                <AlignJustify />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle><SwitchTheme /></DrawerTitle>
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button asChild>
                  <Link to='/signup'>Get Nosion Free</Link>
                </Button>
                <Button asChild variant='outline' className='hover:bg-none!'>
                  <Link to='/login'>Login</Link>
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
} 