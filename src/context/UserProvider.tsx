import { useReducer, useState } from "react";
import { types } from "../types/types";
import { UserContext } from "./UserContext";
import { userReducer } from "./UserReducer";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, {}, init)

  const register = async (user) => {
    const action = { type: types.login, payload: user }
    localStorage.setItem('user', JSON.stringify(user))
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
      dispatch(action)
    } catch (e) {
      localStorage.removeItem('user')
      throw new Error(e.code)
    }
  }

  const logout = async () => {
    const action = { type: types.logout }
    localStorage.removeItem('user')
    await signOut(auth)
    dispatch(action) // Ejecutar una acción
  }

  const login = async (user) => {
    const action = { type: types.login, payload: user }
    localStorage.setItem('user', JSON.stringify(user))
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password)
      dispatch(action)
    } catch (e) {
      localStorage.removeItem('user')
      throw new Error(e.code)
    }
  }

  return (
    <UserContext.Provider value={{ ...userState, register, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};
