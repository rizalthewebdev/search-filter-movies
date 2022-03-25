import React, { useEffect } from "react";

const Filter = ({ popular, setFiltered, genre, setGenre }) => {
   useEffect(() => {
      if (genre === 0) {
         setFiltered(popular);
         return;
      }

      const filtered = popular.filter((movie) =>
         movie.genre_ids.includes(genre)
      );

      setFiltered(filtered);
   }, [genre, popular, setFiltered]);
   return (
      <div className="flex items-center gap-x-3 justify-center md:justify-start py-5">
         <button className={`button-filter glass subtitle ${genre === 0 && 'active'}`} onClick={() => setGenre(0)}>
            All
         </button>
         <button
            className={`button-filter glass subtitle ${genre === 28 && 'active'}`}
            onClick={() => setGenre(28)}
         >
            Action
         </button>
         <button
            className={`button-filter glass subtitle ${genre === 35 && 'active'}`}
            onClick={() => setGenre(35)}
         >
            Comedy
         </button>
      </div>
   );
};

export default Filter;
