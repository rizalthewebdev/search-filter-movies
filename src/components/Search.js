import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const Search = ({ search, setSearch, searchRef, handleSearch,setSearchResult }) => {
   const clear = (e) => {
      e.preventDefault();
      setSearch("");
      searchRef.current.focus();
      setSearchResult([])
   };

   return (
      <div className="w-full py-5 flex justify-center">
         <div className="relative w-80">
            <div className="relative">
               <input
                  ref={searchRef}
                  title="Search input"
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a city"
                  className="w-full focus:outline-none subtitle glass text-zinc-200 px-2.5 pr-14 py-2 rounded-md hover:shadow-lg focus:shadow-lg shadow-black focus:ring-1 ring-zinc-500/75 transition-shadow duration-300 z-50"
               />
               {search && (
                  <div
                     className="absolute top-2 right-14 text-zinc-200 bg-zinc-900/80 hover:bg-zinc-900 rounded-[4px] cursor-pointer p-1"
                     onClick={clear}
                     title="Clear search input"
                  >
                     <FiX fontSize={15} />
                  </div>
               )}
            </div>
            <div
               className="absolute top-0 bottom-0 right-0 px-3.5 glass flex gap-2 items-center justify-center rounded-r-md bg-zinc-500/20 cursor-pointer"
               onClick={handleSearch}
               title="Search"
            >
               <FiSearch fontSize={15} className={`text-gray-200`} />
            </div>
         </div>
      </div>
   );
};

export default Search;