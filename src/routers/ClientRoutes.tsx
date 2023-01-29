import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Monitoreo } from "../ui"
import HomeView from '../pages/Home'

export const ClientRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoreo" element={<Monitoreo />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}
