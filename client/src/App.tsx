import Signup from "@/components/signup/signup";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/core/layout/landing";
import ContentLandingPage from "./components/landing";
import Login from "./components/login/login";
import MainLayout from "./components/core/layout/main";
import DashBoard from "./components/dashboard/dashboard";
// ok
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<Landing />}>
          <Route path="/" element={<ContentLandingPage />} />
        </Route>
      </Routes>
    </>
  )
} 