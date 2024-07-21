import { Link } from "react-router-dom"
import { Button } from "../shadcn/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar"

type ButtonProps = {
  icon: any,
  name: string,
  link: string
}
function ButtonSideBar({ icon, name, link }: ButtonProps) {
  return (
    <>
      <Button asChild>
        <FontAwesomeIcon icon={icon} />
        <Link to={link}>{name}</Link>
      </Button>
    </>
  )
}
function HeaderSideBar() {
  return (
    <>
      <Avatar className="mr-2">
        <AvatarImage src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" />
        <AvatarFallback>image.jps</AvatarFallback>
      </Avatar>
    </>
  )
}
export default function Sidebar() {
  return (
    <nav className='relative hidden h-screen flex-none border-r z-10 pt-20 md:block duration-500 w-72'
    ></nav>
  )
}