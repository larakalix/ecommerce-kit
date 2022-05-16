import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SelectSearchBar } from "@/kit/SelectSearchBar";

interface Props {
    hideCategoryDropdown?: boolean;
}

interface SearchBarProps {
    search: string;
    category?: string | null;
}

const categories = [
    { name: "All", value: "all" },
    { name: "Electronics", value: "electronics" },
    { name: "Fashion", value: "fashion" },
    { name: "Home & Garden", value: "home-garden" },
    { name: "Sports", value: "sports" },
    { name: "Toys", value: "toys" },
    { name: "Health & Beauty", value: "health-beauty" },
    { name: "Books", value: "books" },
    { name: "Movies & Music", value: "movies-music" },
    { name: "Baby & Kids", value: "baby-kids" },
    { name: "Automotive", value: "automotive" },
    { name: "Tools & Home Improvement", value: "tools-home-improvement" },
    { name: "Clothing", value: "clothing" },
    { name: "Sports & Outdoors", value: "sports-outdoors" },
    { name: "Handmade", value: "handmade" },
];

export const SearchBar = ({ hideCategoryDropdown = false }: Props) => {
    const [search, setSearch] = useState<SearchBarProps>({
        search: "All",
        category: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSearch({ ...search, category: value });
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch({ ...search, search: value });
    };

    const handleClick = () => {
        console.log(search);
    };

    return (
        <div className="flex items-center justify-center">
            {hideCategoryDropdown && (
                <div className="flex items-center justify-between w-full max-w-[10vw] border border-cm__border rounded-md overflow-hidden px-5 mr-3 max-h-[3.2rem]">
                    <SelectSearchBar
                        options={categories}
                        handleChange={handleChange}
                    />
                </div>
            )}
            <div className="flex items-center justify-between w-full max-w-[40vw] border border-cm__border rounded-md overflow-hidden px-5 max-h-[3.2rem]">
                <input
                    type="text"
                    placeholder="Search"
                    className="py-4 w-full outline-0 focus:outline-0"
                    onChange={handleSearch}
                />

                <AiOutlineSearch
                    className="cursor-pointer"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
