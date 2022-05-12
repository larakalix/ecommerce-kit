/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { NavItemProps, NavProps } from "@/schemas/nav/NavProps";

export const CenteredLogo = ({ logo, items }: NavProps) => {
    return (
        <div className="flex items-center">
            <ul className="flex items-center justify-center flex-row">
                {items.map(({ label, route, childs }: NavItemProps) => (
                    <li key={`nav-${label.toLowerCase()}`}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
