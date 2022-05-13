import { NavItemProps } from "@/schemas/nav/NavProps";
import { NavItems } from "./NavItems";

export const NavItem = ({ label, route, childs }: NavItemProps) => {
    return (
        <li>
            <button
                // href={route}
                className="font-inter text-cm__main_text text-[0.8rem] flex items-center justify-center px-6 py-4 outline-none focus:outline-none"
            >
                <span>{label}</span>
            </button>
            {childs!?.length > 0 && <NavItems items={childs!} isChild />}
        </li>
    );
};
