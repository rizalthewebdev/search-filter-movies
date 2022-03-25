import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
   return (
      <motion.div
         layout
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
      >
         <div className="relative hover:scale-105 hover:ring-1 rounded-lg ring-zinc-100 text-white text-sm md:text-[15px] text-center cursor-pointer transition-all duration-300">
            <h2 className="opacity-0 desc font-normal tracking-wider rounded-lg hover:opacity-100 flex items-center justify-center absolute inset-0 bg-black/[0.65]">
               {movie.title}
            </h2>
            <img
               src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
               alt="movie-poster"
               className="w-full h-full object-cover rounded-lg"
            />
         </div>
      </motion.div>
   );
};

export default MovieCard;
