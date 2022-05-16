import { useState } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { SelectSearchBar } from "@/kit/SelectSearchBar";

const currencies = [
    { name: "USD", value: "USD" },
    { name: "EUR", value: "EUR" },
    { name: "GBP", value: "GBP" },
];

export const Cart = () => {
    const [currency, setCurrency] = useState("USD");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCurrency(value);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-between w-full max-w-[10vw] border border-cm__border rounded-md overflow-hidden px-5 mr-3 max-h-[3.2rem] flex-1">
                <SelectSearchBar
                    options={currencies}
                    handleChange={handleChange}
                />
            </div>
            <div className="border border-cm__border rounded-md p-3 relative h-[3.5rem] max-h-[3.2rem]">
                <RiShoppingBasket2Line className="fill-current h-6 w-6 text-cm__strong_gray" />
                <span className="absolute flex items-center justify-center text-white bg-cms__kyblue w-[24px] h-[24px] rounded-full text-[12px] font-inter leading-[15px] top-[-0.7rem] right-[-0.7rem]">
                    0
                </span>
            </div>
            <div className="pl-4 flex items-start justify-center flex-col">
                <span className="text-[16px] text-cm__main_text font-semibold leading-[22px]">
                    Shopping Cart
                </span>
                <span className="text-[16px] text-cm__strong_gray font-normal leading-[22px]">
                    Total - $325.11
                </span>
            </div>
        </div>
    );
};
