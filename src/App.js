import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
   const [search, setSearch] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const searchRef = useRef();
   const [popular, setPopular] = useState([]);
   const [filtered, setFiltered] = useState([]);
   const [genre, setGenre] = useState(0);

   const baseUrl = "https://api.themoviedb.org/3/movie";
   const searchUrl = `https://api.themoviedb.org/3/search/movie`;

   useEffect(() => {
      axios
         .get(`${baseUrl}/popular?api_key=${process.env.REACT_APP_API_KEY}`)
         .then((res) => {
            setPopular(res.data.results);
            setFiltered(res.data.results);
         });
   }, []);

   const handleSearch = async () => {
      await axios
         .get(
            `${searchUrl}?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
         )
         .then((res) => {
            setSearchResult(res.data.results);
         });
   };

   return (
      <main className="mx-auto max-w-xs sm:max-w-md md:max-w-screen-sm lg:max-w-screen-lg">
         <Search
            search={search}
            setSearch={setSearch}
            searchRef={searchRef}
            handleSearch={handleSearch}
            setSearchResult={setSearchResult}
         />
         {searchResult.length ? (
            <>
            <h1 className="pb-5 subtitle font-bold tracking-wide text-zinc-200 text-xl">Result for : {search}</h1>
               <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
               >
                  <AnimatePresence>
                     {searchResult?.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                     ))}
                  </AnimatePresence>
               </motion.div>
            </>
         ) : (
            <>
               <Filter
                  popular={popular}
                  setFiltered={setFiltered}
                  genre={genre}
                  setGenre={setGenre}
               />
               <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
               >
                  <AnimatePresence>
                     {filtered.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                     ))}
                  </AnimatePresence>
               </motion.div>
            </>
         )}
      </main>
   );
};

export default App;
