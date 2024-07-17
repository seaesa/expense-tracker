import { Link } from "react-router-dom"
import { Button } from "../shadcn/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/avatar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../shadcn/resizable'
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
export default function SideBar() {
  return (
    <div className="flex flex-col">
      <ResizablePanelGroup direction="horizontal">
        <div className="flex mx-2 items-center cursor-pointer">
          <HeaderSideBar />
          <span className="text-foreground transition-colors font-bold">ngoc hai</span>
        </div>
      </ResizablePanelGroup>
    </div>
  )
}