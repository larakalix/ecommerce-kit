import { useContext, useEffect, useState } from "react";
import { NavProps, NavType } from "@/schemas/nav/NavProps";
import NavFactory from "@/factories/nav/NavFactory";
import ThemeContext from "@/context/ThemeContext";
import { DevConfig } from "./DevConfig";

interface Props {
    nav: NavProps;
}

export const Navbar = ({ nav }: Props) => {
    const { navType, changeNavType } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    const handleNavType = (navType: NavType) => changeNavType(navType);

    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        };
    }, []);

    if (!mounted) return null;

    return (
        <>
            <DevConfig handleNavType={handleNavType} />
            {/* <NavFactory type={nav.type} props={nav} /> */}
            <NavFactory type={navType} props={nav} />
        </>
    );
};
