import React from "react";

interface SelectBarProps {
    options: { name: string; value: string }[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectSearchBar = ({ options, handleChange }: SelectBarProps) => {
    return (
        <select
            className="py-4 w-full outline-0 focus:outline-0"
            onChange={handleChange}
        >
            {options.map(({ name, value }) => (
                <option key={`category-${name}`} value={value}>
                    {name}
                </option>
            ))}
        </select>
    );
};
