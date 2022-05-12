import { NavItemProps } from "@/schemas/nav/NavProps";
import { NavItems } from "./NavItems";

export const NavItem = ({ label, route, childs }: NavItemProps) => {
    return (
        <li>
            <a href={route}>
                {label}

                {/* {childs!.length > 0 ? (
                    <NavItems items={childs!} isChild />
                ) : null} */}

                {childs!?.length > 0 && <NavItems items={childs!} isChild />}
            </a>
        </li>
    );
};
