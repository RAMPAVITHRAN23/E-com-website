import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isopen, setisOpen] = useState(false);

    const handleSearchToggle = () => {
        setisOpen(!isopen);
    };
    const handleSearch = (e) => {
        e.preventDefault();
    console.log("Searching for:", searchTerm);
    setisOpen(false);}

    return (
        // ❌ WRONG: `flex items-center justify-center` outside the template literal
        // ✅ FIXED: Put everything inside one template literal
        <div className={`flex items-center justify-center w-full transition-all-duraion-300 ${isopen
            ? "top-0 left-0 w-full absolute bg-white h-24 z-50"
            : "w-auto"}`}>

            {isopen ? (
                <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            placeholder="Search Product"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-100 px-4 py-3 pl-2 pr-12 rounded-full
                                       placeholder:text-gray-700 focus:outline-none w-full " // ✅ Fixed `focus-outline` → `focus:outline-none`
                        />
                        {/*Search Icon */}
                        <button
                            type="submit">
                            <HiMagnifyingGlass className="w-6 h-6 absolute right-3 top-3 text-gray-700" />
                        </button>
                        {/* Close Button */}
                        <button
                            className="absolute right--10 top-1/4   text-gray-700"
                            type="submit"
                            onClick={handleSearchToggle}
                            >
                            <HiMiniXMark className="h-6 w-6" />
                        </button>
                    </div>
                </form>
            ) : (
                <button onClick={handleSearchToggle}>
                    <HiMagnifyingGlass className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default Searchbar;
