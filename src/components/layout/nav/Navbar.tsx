import { useEffect, useState } from "react";
import { NavProps } from "@/schemas/nav/NavProps";
import NavFactory from "@/factories/nav/NavFactory";

interface Props {
    nav: NavProps;
}

export const Navbar = ({ nav }: Props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <NavFactory type={nav.type} props={nav} />;
};
