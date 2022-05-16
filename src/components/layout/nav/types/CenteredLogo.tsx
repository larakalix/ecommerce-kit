import { NavProps } from "@/schemas/nav/NavProps";
import { NavItems } from "../components";
import { Cart } from "../components/Cart";
import { Logo } from "../components/Logo";
import { SearchBar } from "../components/SearchBar";

export const CenteredLogo = ({ logo, items }: NavProps) => {
    return (
        <div className="grid grid-cols-3 py-14 w-full max-w-[80%] m-auto">
            <div className="navbar group flex items-center justify-center">
                <NavItems items={items} showCategories />
            </div>

            <div className="flex items-center justify-center">
                <Logo src={logo} />
            </div>

            <div className="flex items-center justify-center">
                <Cart />
            </div>
        </div>
    );
};
