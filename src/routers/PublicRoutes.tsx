import { useContext, ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"

export const PublicRoutes = ({children}: {children: JSX.Element}) => {
    const { logged } : any = useContext(UserContext)
    return logged ? <Navigate to='/dashboard'/> : children
}
