import { NavProps } from "@/schemas/nav/NavProps";
import { NavItems } from "../components";
import { Logo } from "../components/Logo";

export const DefaultNav = ({ logo, items }: NavProps) => {
    return (
        <div className="flex items-center border-b border-red-500">
            <div className="max-w-[80%] m-auto flex items-center justify-between">
                <Logo src={logo} />

                <NavItems items={items} />
            </div>
        </div>
    );
};
