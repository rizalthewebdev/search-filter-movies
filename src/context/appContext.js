import { createContext, useContext, useReducer } from "react";
import reducer from './reducer'

const initialState = {
    search: '',
    searchResult: [],
    allMovies: [],
    filteredMovies: [],
    genres: [],
    activeGenre: 0,
    numOfPage: 1,
    totalPage: 0,
    showModal: false
}


const AppContext = createContext();

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
   );
};

const useAppContext = () => {
   return useContext(AppContext);
};

export { useAppContext, AppProvider };
