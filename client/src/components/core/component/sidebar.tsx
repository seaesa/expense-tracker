import { Link } from "react-router-dom"
import { Button } from "../shadcn/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faHouse } from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar"
import { Separator } from "../shadcn/separator"

type ButtonProps = {
  icon: any,
  name: string,
  link: string
}
const sidebarList = [
  {
    icon: faHouse,
    link: '/Dashboard',
    name: 'Dashboard'
  },
  {
    icon: faHouse,
    link: '/task',
    name: 'Task'
  },
  {
    icon: faHouse,
    link: '/settings',
    name: 'Settings'
  },
  {
    icon: faHouse,
    link: '/analytics',
    name: 'Analytics'
  },
]
function ButtonSideBar({ icon, name, link }: ButtonProps) {
  return (
    <>
      <Link to={link}>
        <Button asChild variant='ghost' className="w-full justify-start cursor-pointer my-1">
          <div>
            <FontAwesomeIcon className="flex mr-4" icon={icon} />
            {name}
          </div>
        </Button>
      </Link>
    </>
  )
}
function HeaderSideBar() {
  return (
    <>
      <div className="flex items-center py-2 px-2 cursor-pointer hover:text-accent-foreground hover:bg-accent rounded-md my-2">
        <div className="flex items-center">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" />
            <AvatarFallback>image.jps</AvatarFallback>
          </Avatar>
          <Button variant='link' className="hover:no-underline justify-start" asChild>
            <div className="flex">
              <FontAwesomeIcon className="w-3 order-2 mx-2" icon={faChevronDown} />
              Ngoc Hai
            </div>
          </Button>
        </div>
      </div>
    </>
  )
}
export default function Sidebar() {
  return (
    <div className='relative px-2 py-2 h-screen hidden flex-none border-r z-10 md:block duration-500 w-60'>
      <HeaderSideBar />
      <Separator orientation="horizontal" />
      {sidebarList.map((sidebar, index) => (
        <ButtonSideBar key={index} icon={sidebar.icon} link={sidebar.link} name={sidebar.name} />
      ))}
    </div>
  )
}