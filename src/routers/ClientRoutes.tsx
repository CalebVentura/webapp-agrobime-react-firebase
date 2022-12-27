import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Monitoreo } from "../ui"
import { Navbar } from "../ui/components/Navbar"
import HomeView from '../pages/Home'

export const ClientRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoreo" element={<Monitoreo />} />
        <Route path="/new" element={<HomeView />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}
