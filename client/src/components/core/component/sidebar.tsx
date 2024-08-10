import { Link } from "react-router-dom"
import { Button } from "../shadcn/button"
import { Bell, CalendarCheck, CircleUserRound, Home, Package2, Settings, } from "lucide-react"
import { useUserStore } from '@/stores/user'

type ButtonProps = {
  icon: any,
  name: string,
  link: string,
  active?: boolean,
  [key: string]: any
}
const sidebarList = [
  {
    icon: Home,
    link: '/Dashboard',
    name: 'Dashboard'
  },
  {
    icon: CalendarCheck,
    link: '/task',
    name: 'Task'
  },
  {
    icon: Package2,
    link: '/analytics',
    name: 'Analytics'
  },
  {
    icon: Settings,
    link: '/settings',
    name: 'Settings'
  },
]
function ButtonSideBar({ icon: Icon, name, link, active = false, ...props }: ButtonProps) {
  return (
    <>
      <div className="flex-1 my-1" {...props}>
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4x">
          <Link to={link} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${active || 'text-muted-foreground'} transition-all hover:text-primary`} >
            <Icon className="h-4 w-4" />
            {name}
          </Link>
        </nav>
      </div>
    </>
  )
}
function HeaderSideBar() {
  const user = useUserStore((state) => state.user)
  return (
    <>
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link to="/dashboard" className="flex items-center gap-2 font-semibold space-x-1">
          <CircleUserRound className="h-6 w-6" />
          <span className="">{user?.username}</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
    </>
  )
}
export default function Sidebar() {
  return (
    <div className='relative px-2 py-2 h-screen hidden flex-none border-r z-10 md:block duration-500 w-60'>
      <HeaderSideBar />
      <div className="my-4">
        {sidebarList.map((sidebar, index) => (
          <ButtonSideBar
            icon={sidebar.icon} link={sidebar.link} name={sidebar.name} key={index} />
        ))}
      </div>
    </div>
  )
}