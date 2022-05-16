import { NavType } from "@/schemas/nav/NavProps";

interface Props {
    handleNavType: (navType: NavType) => void;
}

export const DevConfig = ({ handleNavType }: Props) => {
    return (
        <div className="fixed bg-red-500 opacity-40 h-screen flex items-center justify-center flex-col p-4">
            <div className="w-full">
                <span className="bg-white text-black rounded-md w-full p-1 mb-2 block text-center">
                    Nav Type
                </span>
                <ul className="flex items-center justify-center space-x-3 flex-col">
                    {Object.values(NavType).map((navType: NavType) => (
                        <li
                            key={navType}
                            className="cursor-pointer"
                            onClick={() => handleNavType(navType)}
                        >
                            <span>{navType}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
