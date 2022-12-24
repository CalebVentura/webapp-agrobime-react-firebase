import { ReactNode } from "react";

export interface IUser {
    email: string;
    password: string;
}

export interface IUserContext {
    register : (user: IUser) => {},
    logout: () => {},
    login: (user: IUser) => {},
}

export interface IUserProviderProps {
    children: ReactNode;
}