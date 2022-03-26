import React from "react";

const Filter = ({
   activeGenre,
   setActiveGenre,
   genres,
}) => {

   return (
      <div className="flex items-center gap-x-3 justify-center md:justify-start py-8">
         <button
            className={`button-filter glass subtitle ${
               activeGenre === 0 && "active"
            }`}
            onClick={() => setActiveGenre(0)}
         >
            All
         </button>
         {genres
            .filter((genre, index) => index < 2)
            .map((genre) => (
               <button
                  className={`button-filter glass subtitle ${
                     activeGenre === genre.id && "active"
                  }`}
                  onClick={() => setActiveGenre(genre.id)}
               >
                  {genre.name}
               </button>
            ))}
      </div>
   );
};

export default Filter;
