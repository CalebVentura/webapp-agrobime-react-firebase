import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../ui";
import { ClientRoutes } from "./ClientRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import AuthView from '../pages/Auth/Auth'


export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/auth' element={
            <PublicRoutes>
                <AuthView/>
            </PublicRoutes>} />
        <Route path="/*" element={
            <PrivateRoutes>
                <ClientRoutes />
            </PrivateRoutes>} />
      </Routes>
    </div>
  );
};
