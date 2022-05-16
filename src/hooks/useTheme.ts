import { useState } from "react";
import { NavType } from "@/schemas/nav/NavProps";

const useTheme = () => {
    const [theme, setTheme] = useState("light");
    const [navType, setNavType] = useState(NavType.DefaultNav);

    const changeTheme = (value: string) => setTheme(value);

    const changeNavType = (value: NavType) => setNavType(value);

    return {
        theme,
        navType,
        changeTheme,
        changeNavType,
    };
};

export default useTheme;
