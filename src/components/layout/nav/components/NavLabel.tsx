import { RiArrowUpSLine } from "react-icons/ri";

interface Props {
    label: string;
    haveChilds: boolean;
}

export const NavLabel = ({ label, haveChilds }: Props) => {
    return (
        <div className="outline-none focus:outline-none bg-white rounded-sm flex items-center">
            <span className="select-none font-inter font-medium text-[1rem] leading-[22px] flex-1 text-cm__main_text">
                {label}
            </span>
            {haveChilds && (
                <span className="pl-3">
                    <RiArrowUpSLine className="text-[1.3rem] fill-current h- w-4 transform -rotate-180 text-cm__main_text" />
                </span>
            )}
        </div>
    );
};
