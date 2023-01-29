import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClientRoutes } from "./ClientRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import AuthView from '../pages/Auth/Auth'
import HomeView from '../pages/Home'


export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeView />} />
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
