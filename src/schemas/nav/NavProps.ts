import { CSSProperties } from "react";
import { IconType } from "react-icons";

export enum NavType {
    DefaultNav = "DefaultNav",
    CenteredLogo = "CenteredLogo",
}

export interface NavItemProps {
    label: string;
    route: string;
    icon?: IconType;
    counter?: number;
    childs?: NavItemProps[];
}

export interface NavProps {
    type: NavType;
    logo: string;
    items: NavItemProps[];
    styles: CSSProperties | null;
}
