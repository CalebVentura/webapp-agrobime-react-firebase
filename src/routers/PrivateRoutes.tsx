import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context";

export const PrivateRoutes = ({children}: {children: JSX.Element}) => {
  const { logged } : any = useContext( UserContext)
  const { pathname } = useLocation();
  localStorage.setItem('lastPath', pathname)

  return logged ? children : <Navigate to='/auth'/>;
};
