import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/headerLandingPage";
// type LandingProps = {
//   children?: React.ReactNode
// }
const Landing = () => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
export default Landing