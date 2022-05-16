import { createContext } from "react";
import { NavType } from "@/schemas/nav/NavProps";

interface ThemeContextProps {
    theme: string;
    navType: NavType;
    changeTheme: (value: string) => void;
    changeNavType: (value: NavType) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export default ThemeContext;
