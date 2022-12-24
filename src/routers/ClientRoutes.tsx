import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Monitoreo } from "../ui"
import { Navbar } from "../ui/components/Navbar"

export const ClientRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoreo" element={<Monitoreo />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}
