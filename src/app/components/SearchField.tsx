"use client"
import { useState } from 'react';
import { Icon } from './Icon';
interface SearchFieldProps {
    placeholder?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ placeholder = 'Search' }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="relative flex items-center">
            <button
                type="button"
                className="absolute left-2"
            >
                <Icon id="search" className="w-6 h-6 " />
            </button>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="py-2 pl-8 pr-3 w-full bg-gray-100  rounded focus:outline-none focus:none"
            />

        </div>
    );
};

export default SearchField;
