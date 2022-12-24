import { createContext } from "react";
import { IUserContext } from './interfaces/UserInterfaces'

export const UserContext = createContext<IUserContext | null>(null);
