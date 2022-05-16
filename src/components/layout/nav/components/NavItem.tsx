import { NavItemProps } from "@/schemas/nav/NavProps";
import clsx from "clsx";
import { NavItems } from "./NavItems";
import { NavLabel } from "./NavLabel";

interface Props extends NavItemProps {
    fromChild?: boolean;
}

export const NavItem = ({
    label,
    route,
    childs,
    fromChild = false,
}: Props) => {
    const childStyles = clsx({
        ["border-b border-cm__border last:border-none"]: fromChild,
        ["border-none"]: !fromChild,
    });

    return (
        <li className={`cursor-pointer text-center px-6 py-4 relative ${childStyles}`}>
            <NavLabel label={label} haveChilds={childs!?.length > 0} />

            {childs!?.length > 0 && (
                <NavItems items={childs!} isChild />
            )}
        </li>
    );
};
