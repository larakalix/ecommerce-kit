import { NavProps } from "@/schemas/nav/NavProps";
import { NavItems } from "../components";
import { Cart } from "../components/Cart";
import { Logo } from "../components/Logo";
import { SearchBar } from "../components/SearchBar";

export const MinimalSearch = ({ logo, items }: NavProps) => {
    return (
        <div className="flex items-center py-8">
            <div className="w-full max-w-[80%] m-auto flex items-center justify-between">
                <Logo src={logo} />

                <div className="flex">
                    <SearchBar />
                </div>

                <div className="navbar group flex-1">
                    <NavItems items={items} showCategories={false} />
                </div>

                <Cart />
            </div>
        </div>
    );
};
