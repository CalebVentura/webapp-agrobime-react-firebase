import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"

export const PublicRoutes = ({ children }) => {
    const { logged } = useContext(UserContext)
    return logged ? <Navigate to='/dashboard'/> : children
}
