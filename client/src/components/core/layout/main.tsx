import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar";
type MainProps = {
  children?: React.ReactNode
}
const Main: React.FC<MainProps> = ({ children }) => {

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-scroll">{children || <Outlet />}</main>
      </div>
    </>
  )
}
export default Main