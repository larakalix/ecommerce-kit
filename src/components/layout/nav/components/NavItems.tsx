import { NavItemProps } from "@/schemas/nav/NavProps";
import clsx from "clsx";
import { NavItem } from "./NavItem";

interface Props {
    items: NavItemProps[];
    isChild?: boolean;
}

export const NavItems = ({ items, isChild = false }: Props) => {
    const childStyles = clsx({
        ["absolute flex-col bg-gray-200 p-4"]: isChild,
        ["relative flex-row pl-8 space-x-4"]: !isChild,
    });

    return (
        <ul className={`flex items-center justify-center ${childStyles}`}>
            {items.map(({ label, ...props }: NavItemProps) => (
                <NavItem
                    key={`nav-${label.toLowerCase()}`}
                    {...{ label, ...props }}
                />
            ))}
        </ul>
    );
};
