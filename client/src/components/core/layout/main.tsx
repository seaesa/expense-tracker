import { Outlet } from "react-router-dom";
import SideBar from "../component/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../shadcn/resizable'
type MainProps = {
  children?: React.ReactNode
}
const Main: React.FC<MainProps> = ({ children }) => {

  return (
    <>
      <div className="flex">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <SideBar />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            {children || <Outlet />}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}
export default Main