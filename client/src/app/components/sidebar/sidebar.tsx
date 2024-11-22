import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  CalendarCheck,
  ChartColumnStacked,
  CircleUserRound,
  Home,
  Package2,
  Settings,
} from 'lucide-react';
import { useUserStore } from '@/stores/user';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { useCookies } from 'react-cookie';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSeparator, SidebarTrigger, useSidebar } from '../ui/sidebar';

const sidebarList = [
  {
    icon: Home,
    link: '/Dashboard',
    name: 'Dashboard',
  },
  {
    icon: CalendarCheck,
    link: '/table',
    name: 'table',
  },
  {
    icon: ChartColumnStacked,
    link: '/categories',
    name: 'categories',
  },
  {
    icon: Package2,
    link: '/analytics',
    name: 'Analytics',
  },
  {
    icon: Settings,
    link: '/settings',
    name: 'Settings',
  },
];
function HeaderSideBar() {
  const user = useUserStore((state) => state.user);
  const [, , removeCookie] = useCookies(['token']);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link to='/dashboard' className='flex items-center'>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <CircleUserRound className='h-5 w-5' />
            </Button>
            <span className='font-semibold text-muted-foreground'>{user?.username}</span>
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => removeCookie('token')}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default function MainSidebar() {
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <>
      <Sidebar collapsible={isMobile ? "offcanvas" : 'icon'} >
        <SidebarHeader className='h-16 justify-center'>
          <HeaderSideBar />
          {!isMobile && <SidebarTrigger variant='outline' className="z-50 absolute -right-4 top-12" />}
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup >
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarList.map((item) => (
                  <SidebarMenuItem
                    onClick={() => isMobile && setOpenMobile(false)}
                    key={item.name} className='grid items-start px-2 text-sm font-medium lg:px-4x'>
                    <Link
                      to={item.link}
                      className={`flex items-center gap-4 rounded-lg py-2 ${false || 'text-muted-foreground'} transition-all hover:text-primary capitalize`}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
