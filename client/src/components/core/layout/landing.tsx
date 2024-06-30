import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";

type LandingProps = {
  children?: React.ReactNode
}
const Landing: React.FC<LandingProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        {children || <Outlet />}
        <Footer />
      </div>
    </>
  )
}
export default Landing