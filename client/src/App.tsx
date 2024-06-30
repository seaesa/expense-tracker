import { Route, Routes } from "react-router-dom";
import Signup from "@/components/signup/signup";
import { useEffect } from "react";
import Landing from "./components/core/layout/landing";
import ContentLandingPage from "./components/landing";
export default function App() {
  useEffect(() => { }, [])
  return (
    <>
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<ContentLandingPage />} />
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  )
} 