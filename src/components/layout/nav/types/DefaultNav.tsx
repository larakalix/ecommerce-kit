import { NavProps } from "@/schemas/nav/NavProps";
import { NavItems } from "../components";
import { Cart } from "../components/Cart";
import { Logo } from "../components/Logo";
import { SearchBar } from "../components/SearchBar";

export const DefaultNav = ({ logo, items }: NavProps) => {
    return (
        <div className="flex items-center">
            <div className="w-full m-auto flex items-center justify-between flex-col">
                <div className="w-full">
                    <div className="max-w-[80%] m-auto py-12 px-6 flex items-center justify-between">
                        <Logo src={logo} />

                        <div className="flex-1">
                            <SearchBar />
                        </div>

                        <Cart />
                    </div>
                </div>
                <div className="navbar group inline-block border-b border-t border-cm__border w-full">
                    <NavItems items={items} showCategories />
                </div>
            </div>
        </div>
    );
};
