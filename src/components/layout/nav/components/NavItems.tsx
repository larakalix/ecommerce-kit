import clsx from "clsx";
import NavCategories from "./NavCategories";
import { NavItem } from "./NavItem";
import { NavItemProps } from "@/schemas/nav/NavProps";

interface Props {
    items: NavItemProps[];
    showCategories?: boolean;
    isChild?: boolean;
}

export const NavItems = ({
    items,
    showCategories = false,
    isChild = false,
}: Props) => {
    const childStyles = clsx({
        ["absolute border border-cm__border bg-white min-w-[8rem]"]: isChild,
        ["flex items-center justify-start"]: !isChild,
    });

    return (
        <ul className={`${childStyles} max-w-[80%] m-auto`}>
            {showCategories && <NavCategories />}
            {items.map(({ label, ...props }: NavItemProps) => (
                <NavItem
                    key={`nav-${label.toLowerCase()}`}
                    {...{ label, ...props }}
                    fromChild={isChild}
                />
            ))}
        </ul>
    );
};
