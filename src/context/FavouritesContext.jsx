import { createContext, useState, useEffect } from "react";

export const favContext = createContext();

const FavouritesContext = (props) => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFav = (id) => {
    return favorites.includes(id);
  };

  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const favoriteList = favorites.filter((favorite) => favorite !== id);
      setFavorites(favoriteList);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favorites))
  // }, [favorites]);

  return (
    <favContext.Provider value={{ handleFavorite, isFav, favorites }}>
      {props.children}
    </favContext.Provider>
  );
};

export default FavouritesContext;
