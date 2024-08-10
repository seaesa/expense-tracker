import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../component/sidebar";
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
type MainProps = {
  children?: React.ReactNode
}
const Main: React.FC<MainProps> = ({ children }) => {
  const [cookies] = useCookies(['token'])
  const navigate = useNavigate()
  useEffect(() => {
    if (!cookies.token) navigate('/')
  }, [cookies])
  return (
    <>
      <div className="flex max-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-scroll">{children || <Outlet />}</main>
      </div>
    </>
  )
}
export default Main