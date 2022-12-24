import { useReducer, useState, FC } from "react";
import { types } from "../types/types";
import { UserContext } from "./UserContext";
import { userReducer } from "./UserReducer";
import { IUser, IUserProviderProps } from './interfaces/UserInterfaces'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserProvider: FC<IUserProviderProps> = ({ children }) => {
  const init = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return {
      logged: !!user,
      user,
    };
  };

  const [userState, dispatch] = useReducer(userReducer, {}, init);

  const register = async (user: IUser) => {
    const action = { type: types.login, payload: user };
    localStorage.setItem("user", JSON.stringify(user));
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      dispatch(action);
    } catch (e: any) {
      localStorage.removeItem("user");
      throw new Error(e.code);
    }
  };

  const logout = async () => {
    const action = { type: types.logout };
    localStorage.removeItem("user");
    await signOut(auth);
    dispatch(action); // Ejecutar una acción
  };

  const login = async (user: IUser) => {
    const action = { type: types.login, payload: user };
    localStorage.setItem("user", JSON.stringify(user));
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      dispatch(action);
    } catch (e: any) {
      localStorage.removeItem("user");
      throw new Error(e.code);
    }
  };

  return (
    <UserContext.Provider value={{ ...userState, register, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};
