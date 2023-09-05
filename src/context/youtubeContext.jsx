import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { options } from "../utils/constants.jsx";

export const YoutubeContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    setSearchResult(null);

    fetchCategory(selectedCategory);
  }, [selectedCategory]);

  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setSearchResult(res.data.contents));
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, searchResult }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
