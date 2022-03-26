import React from "react";
import ReactPaginate from "react-paginate";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const Pagination = ({ totalPage, setPageNumber }) => {
   const onChange = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <ReactPaginate
         className="w-full md:w-5/6 lg:w-4/6 text-zinc-200 flex items-center justify-between py-8 desc tracking-wide"
         previousLabel={
            <div className="flex items-center gap-1.5 button-filter glass px-4">
               <HiOutlineArrowSmLeft fontSize={20} />
               <span className="text-base hidden md:inline">Prev</span> 
            </div>
         }
         nextLabel={
            <div className="flex items-center gap-1.5 button-filter glass px-4">
               <span className="text-base hidden md:inline">Next</span> 
               <HiOutlineArrowSmRight fontSize={20} />
            </div>
         }
         pageCount={totalPage > 100 ? 99 : totalPage}
         onPageChange={onChange}
         activeClassName="glass button-filter px-4 ring-1 ring-zinc-200"
      />
   );
};

export default Pagination;
