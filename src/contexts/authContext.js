import Store from "@src/contexts/store/index.js";
import { createContext } from "react";

export const store = new Store();
export const AuthContext = createContext({ store });
