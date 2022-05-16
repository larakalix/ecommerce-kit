import { IoIosMenu } from "react-icons/io";

const NavCategories = () => {
    return (
        <li className="flex items-center justify-between px-6 py-4 border-r border-cm__border">
            <span className="pr-2">
                <IoIosMenu />
            </span>
            <span className="select-none font-inter font-bold text-[1rem] leading-[22px] flex-1 text-cm__main_text">
                Categories
            </span>
        </li>
    );
};

export default NavCategories;
